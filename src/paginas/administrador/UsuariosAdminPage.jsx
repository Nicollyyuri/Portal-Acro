import React, { useState, useEffect } from 'react';
import {
    Box, Typography, IconButton, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import LayoutAdmin from '../../componentes/LayoutAdmin';
import UsuarioForm from '../../componentes/UsuarioForm';

const UsuariosAdminPage = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [editData, setEditData] = useState(null);

    // Buscar usuários
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await fetch('http://localhost:3030/api/customers');
                const data = await res.json();
                const ordenados = data.sort((a, b) =>
                    a.nome.toLowerCase().localeCompare(b.nome.toLowerCase())
                );
                setUsuarios(ordenados);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsuarios();
    }, []);

    const handleEdit = (usuario) => {
        setEditData(usuario);
        setOpenDialog(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Deseja realmente excluir este usuário?')) return;

        try {
            await fetch(`http://localhost:3030/api/customers/${id}`, {
                method: 'DELETE',
            });
            setUsuarios(usuarios.filter(u => u._id !== id));
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    };

    const handleSave = (dados) => {
        if (dados._id) {
            setUsuarios(usuarios.map(u => u._id === dados._id ? dados : u));
        } else {
            const novo = { ...dados, _id: Date.now().toString() }; // simulação local
            setUsuarios([...usuarios, novo]);
        }
        setOpenDialog(false);
    };

    return (
        <LayoutAdmin>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Gerenciamento de Usuários
                </Typography>
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
                            {usuarios.map((usuario) => (
                                <TableRow key={usuario._id}>
                                    <TableCell>{usuario.nome}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => handleEdit(usuario)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(usuario._id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <UsuarioForm
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                    onSave={handleSave}
                    initialData={editData}
                />
            </Box>
        </LayoutAdmin>
    );
};

export default UsuariosAdminPage;
