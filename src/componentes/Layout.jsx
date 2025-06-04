import React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
    { text: 'Início', path: '/cliente/inicio' },
    { text: 'Boletos', path: '/cliente/boletos' },
    { text: 'Obras', path: '/cliente/obras' },
    { text: 'Assistência', path: '/cliente/assistencia' },
    { text: 'Documentos', path: '/cliente/documentos' },
    { text: 'Sair', path: '/' },
];

const Layout = ({ children }) => (
    <Box
        sx={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1f2f34 0%, #010300 100%)', // fundo aplicado aqui
            display: 'flex',
            flexDirection: 'column',
            fontSize: '1.125rem',
            letterSpacing: '0.5px',
        }}
    >
        <AppBar
            position="static"
            sx={{
                pb: 1,
                backgroundColor: '#314C53',
            }}
        >
            <Toolbar sx={{ py: 2 }}>
                <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        flexGrow: 1,
                    }}
                >
                    <img
                        src="/imagens/logo-acro.png"
                        alt="Logo ACRO"
                        style={{ height: 40 }}
                    />
                </Box>

                {menuItems.map(item => (
                    <Button
                        key={item.text}
                        component={RouterLink}
                        to={item.path}
                        sx={{
                            mx: 2,
                            textTransform: 'none',
                            fontSize: '1rem',
                            color: 'primary.contrastText',
                            '&:hover': {
                                color: 'secondary.main',
                            }
                        }}
                    >
                        {item.text}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 4,
                pt: 8,
            }}
        >
            <Outlet />
        </Box>
    </Box>
);

export default Layout;
