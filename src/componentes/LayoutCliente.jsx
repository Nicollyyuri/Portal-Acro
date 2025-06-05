import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { text: 'Início', path: '/cliente/inicio' },
    { text: 'Boletos', path: '/cliente/boletos' },
    { text: 'Documentos', path: '/cliente/documentos' },
    { text: 'Obras', path: '/cliente/obras' },
    { text: 'Assistência', path: '/cliente/assistencia' },
    { text: 'Sair', path: '/' },
];

const LayoutCliente = ({ children }) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1f2f34 0%, #010300 100%)',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.125rem',
                letterSpacing: '0.5px',
            }}
        >
            <AppBar position="static" sx={{ pb: 2, backgroundColor: '#314C53' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>

                    <Box
                        component="img"
                        src="/imagens/logo-acro.png"
                        alt="Logo ACRO"
                        onClick={() => navigate('/cliente/inicio')}
                        sx={{
                            height: 70,
                            mt: 1,
                            mb: 1,
                            cursor: 'pointer'
                        }}
                    />

                    <Box>
                        {menuItems.map((item) => (
                            <Button
                                key={item.text}
                                component={RouterLink}
                                to={item.path}
                                color="inherit"
                                sx={{ mx: 1, fontSize: '1.3rem', }}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box sx={{ flexGrow: 1, p: 1 }}>
                {children}
            </Box>
        </Box>
    );
};

export default LayoutCliente;
