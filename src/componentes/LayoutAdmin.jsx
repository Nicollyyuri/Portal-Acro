import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { Outlet, Link as RouterLink } from 'react-router-dom';

const adminMenuItems = [
    { text: 'Painel', path: '/admin/dashboard' },
    { text: 'Usuários', path: '/admin/usuarios' },
    { text: 'Cadastrar Usuário', path: '/admin/usuarios/novo' },
    { text: 'Portal', path: '/admin/portal' },
    { text: 'Formulário', path: '/admin/formulario' },
    { text: 'Relatórios', path: '/admin/relatorios' },
    { text: 'Configurações', path: '/admin/configuracoes' },
    { text: 'Sair', path: '/' },
];

const LayoutAdmin = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1f2f34 0%, #010300 100%)',
                color: '#F7F8FC',
            }}
        >
            {/* Menu Lateral */}
            <Box
                sx={{
                    width: 240,
                    backgroundColor: '#1f2f34',
                    borderRight: '1px solid #314C53',
                    p: 2,
                }}
            >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <img
                        src="/imagens/logo-acro.png"
                        alt="Logo ACRO"
                        style={{ maxWidth: 160 }}
                    />
                </Box>
                <List>
                    {adminMenuItems.map((item) => (
                        <ListItem
                            key={item.text}
                            button
                            component={RouterLink}
                            to={item.path}
                            sx={{
                                color: '#F7F8FC',
                                '&:hover': {
                                    backgroundColor: '#314C53',
                                },
                            }}
                        >
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Conteúdo da Rota Atual */}
            <Box sx={{ flexGrow: 1, p: 4 }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default LayoutAdmin;
