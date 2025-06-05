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

            {/* CONTEÚDO PRINCIPAL */}
            <Box
                sx={{
                    flexGrow: 1,
                    p: 3,
                    overflowY: 'auto',
                    maxHeight: '100vh', // Adicione isso
                    backgroundColor: '#102324', // opcional para melhor visual
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
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
