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
    Button
} from '@mui/material';

const usuarios = [
    { id: 1, nome: 'João Admin', email: 'joao@acro.com' },
    { id: 2, nome: 'Maria Gestora', email: 'maria@acro.com' },
    // Você pode adicionar mais para testar a rolagem
];

const AdminUsuarios = () => {
    return (
        <Box
            sx={{
                height: '100vh',         // Altura total da viewport
                overflowY: 'auto',       // Habilita rolagem vertical se necessário
                px: 3,
                py: 4,
                backgroundColor: '#f7f7f7',
            }}
        >
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
    );
};

export default AdminUsuarios;
