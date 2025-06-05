import React from 'react';
import {
    Box,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
    Divider
} from '@mui/material';

// Simula muitos usuários para teste
const usuarios = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    nome: `Usuário ${i + 1}`,
    email: `usuario${i + 1}@acro.com`,
}));

const AdminUsuarios = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* SIDEBAR */}
            <Box
                sx={{
                    width: 240,
                    backgroundColor: '#263238',
                    color: '#fff',
                    p: 2,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Menu Admin
                </Typography>
                <Divider sx={{ mb: 2, backgroundColor: '#455A64' }} />

                {/* Simulação de muitos itens no menu */}
                {Array.from({ length: 30 }, (_, i) => (
                    <Typography
                        key={i}
                        variant="body2"
                        sx={{
                            mb: 1,
                            cursor: 'pointer',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        Cliente {i + 1}
                    </Typography>
                ))}
            </Box>

            {/* CONTEÚDO PRINCIPAL */}
            <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
                <Typography variant="h4" gutterBottom>
                    Usuários Cadastrados
                </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usuarios.map((usuario) => (
                                <TableRow key={usuario.id}>
                                    <TableCell>{usuario.nome}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" size="small">
                                            Editar
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            color="error"
                                            sx={{ ml: 1 }}
                                        >
                                            Remover
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default AdminUsuarios;
