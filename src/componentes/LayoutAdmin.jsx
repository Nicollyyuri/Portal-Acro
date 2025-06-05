import React from 'react';
import { Box, Button } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const adminMenuItems = [
    { text: 'Início', path: '/admin/dashboard' },
    { text: 'Gerenciar Documentos', path: '/admin/gerenciar-documentos' },
    { text: 'Cadastrar Usuário', path: '/admin/usuarios/novo' },
    { text: 'Usuários', path: '/admin/usuarios' },
    { text: 'Relatórios', path: '/admin/relatorios' },
    { text: 'Configurações', path: '/admin/configuracoes' },
    { text: 'Sair', path: '/' },
];

const LayoutAdmin = ({ children }) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1f2f34 0%, #010300 100%)',
                fontSize: '1.125rem',
                letterSpacing: '0.5px',
                color: '#F7F8FC',
            }}
        >
            {/* Menu lateral */}
            <Box
                sx={{
                    width: 260,
                    backgroundColor: '#1f2f34',
                    borderRight: '1px solid #314C53',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 3,
                }}
            >
                <Box
                    component="img"
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    onClick={() => navigate('/admin/dashboard')}
                    sx={{
                        height: 70,
                        cursor: 'pointer',
                        mb: 4,
                    }}
                />

                {adminMenuItems.map((item) => (
                    <Button
                        key={item.text}
                        component={RouterLink}
                        to={item.path}
                        color="inherit"
                        sx={{
                            justifyContent: 'flex-start',
                            width: '90%',
                            mb: 1,
                            fontSize: '1.1rem',
                            color: '#F7F8FC',
                            textTransform: 'none',
                            px: 2,
                            '&:hover': {
                                backgroundColor: '#314C53',
                            },
                        }}
                    >
                        {item.text}
                    </Button>
                ))}
            </Box>

            {/* Conteúdo da página atual */}
            <Box sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    );
};

export default LayoutAdmin;
