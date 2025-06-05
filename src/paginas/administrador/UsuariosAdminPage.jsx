import React, { useState, useEffect } from 'react';
import {
    Box, Typography, IconButton, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Collapse,
    TextField, InputAdornment, Snackbar, Alert
} from '@mui/material';
import {
    Edit, Delete, ExpandMore, ExpandLess, Save, Cancel, Search
} from '@mui/icons-material';

const UsuariosAdminPage = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [expandedUserId, setExpandedUserId] = useState(null);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editedUserData, setEditedUserData] = useState({});
    const [search, setSearch] = useState('');
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await fetch('http://localhost:3030/api/customers');
                const data = await res.json();
                const sorted = data.sort((a, b) =>
                    a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
                );
                setUsuarios(sorted);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsuarios();
    }, []);

    const handleDelete = async (id) => {
        const confirm = window.confirm('Deseja realmente excluir este usuário?');
        if (!confirm) return;

        try {
            await fetch(`http://localhost:3030/api/customers/${id}`, {
                method: 'DELETE',
            });
            setUsuarios(usuarios.filter(u => u._id !== id));
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            alert('Erro ao excluir usuário.');
        }
    };

    const toggleExpand = (id) => {
        setExpandedUserId(prev => (prev === id ? null : id));
        const user = usuarios.find(u => u._id === id);
        setEditedUserData(user || {});
        setEditingUserId(null);
    };

    const handleFieldChange = (field, value) => {
        setEditedUserData(prev => ({ ...prev, [field]: value }));
    };

    const handleInlineSave = async (id) => {
        try {
            await fetch(`http://localhost:3030/api/customers/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedUserData),
            });
            setUsuarios(usuarios.map(u => u._id === id ? editedUserData : u));
            setEditingUserId(null);
            setSnackbar({ open: true, message: 'Usuário atualizado com sucesso!', severity: 'success' });
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            alert('Erro ao salvar usuário.');
            setSnackbar({ open: true, message: 'Erro ao atualizar usuário.', severity: 'error' });
        }
    };

    const filteredUsuarios = usuarios.filter(u =>
        u.nome.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <Box sx={{ p: 4, color: 'white' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h4" fontWeight="bold">
                    Gerenciamento de Usuários
                </Typography>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Nome</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Ações</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsuarios.map((usuario) => (
                            <React.Fragment key={usuario._id}>
                                <TableRow>
                                    <TableCell>{usuario.nome}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => toggleExpand(usuario._id)}>
                                            {expandedUserId === usuario._id ? <ExpandLess /> : <ExpandMore />}
                                        </IconButton>
                                        <IconButton onClick={() => {
                                            setEditedUserData(usuario);
                                            setEditingUserId(usuario._id);
                                            setExpandedUserId(usuario._id);
                                        }}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(usuario._id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3} style={{ paddingBottom: 0, paddingTop: 0 }}>
                                        <Collapse in={expandedUserId === usuario._id} timeout="auto" unmountOnExit>
                                            <Box sx={{ margin: 2, maxHeight: 400, overflowY: 'auto' }}>
                                                {editingUserId === usuario._id ? (
                                                    <>
                                                        <TextField fullWidth margin="dense" label="Nome" value={editedUserData.nome || ''} onChange={(e) => handleFieldChange('nome', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="Email" value={editedUserData.email || ''} onChange={(e) => handleFieldChange('email', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="CPF" value={editedUserData.cpf || ''} onChange={(e) => handleFieldChange('cpf', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="Data de Nascimento" type="date"
                                                            InputLabelProps={{ shrink: true }}
                                                            value={editedUserData.data_nascimento ? new Date(editedUserData.data_nascimento).toISOString().substr(0, 10) : ''}
                                                            onChange={(e) => handleFieldChange('data_nascimento', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="Telefone" value={editedUserData.telefone || ''} onChange={(e) => handleFieldChange('telefone', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="Rua" value={editedUserData.rua || ''} onChange={(e) => handleFieldChange('rua', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="Número" value={editedUserData.numero || ''} onChange={(e) => handleFieldChange('numero', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="Bairro" value={editedUserData.bairro || ''} onChange={(e) => handleFieldChange('bairro', e.target.value)} />
                                                        <TextField fullWidth margin="dense" label="CEP" value={editedUserData.cep || ''} onChange={(e) => handleFieldChange('cep', e.target.value)} />
                                                        <Box sx={{ mt: 2 }}>
                                                            <IconButton onClick={() => handleInlineSave(usuario._id)}><Save color="success" /></IconButton>
                                                            <IconButton onClick={() => setEditingUserId(null)}><Cancel color="error" /></IconButton>
                                                        </Box>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Typography><b>CPF:</b> {usuario.cpf}</Typography>
                                                        <Typography><b>Data de Nascimento:</b> {new Date(usuario.data_nascimento).toLocaleDateString()}</Typography>
                                                        <Typography><b>Telefone:</b> {usuario.telefone}</Typography>
                                                        <Typography><b>Endereço:</b> {`${usuario.rua}, ${usuario.numero} - ${usuario.bairro}, CEP: ${usuario.cep}`}</Typography>
                                                        <Typography><b>Criado em:</b> {new Date(usuario.createdAt).toLocaleString()}</Typography>
                                                    </>
                                                )}
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
    
            {/* Snackbar */ }
    <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
        <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
        >
            {snackbar.message}
        </Alert>
    </Snackbar>

};

export default UsuariosAdminPage;