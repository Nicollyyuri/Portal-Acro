import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LayoutCliente from '../../componentes/LayoutCliente.jsx';

const InicioClientePage = () => {
    const navigate = useNavigate();

    return (
        <LayoutCliente>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    px: 2,
                    textAlign: 'center',
                }}
            >
                {/* Logo clicável */}
                <Box
                    component="img"
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    onClick={() => navigate('/cliente/inicio')}
                    sx={{
                        height: 160,
                        mb: 4,
                        cursor: 'pointer'
                    }}
                />

                {/* Título principal */}
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="text.primary"
                    sx={{ fontWeight: 'bold', letterSpacing: 1 }}
                >
                    Bem-vindo ao portal
                </Typography>

                {/* Texto informativo */}
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 700, textAlign: 'center', px: 2 }}
                >
                    Aqui você consegue acompanhar boletos, andamento de obras,
                    documentos e muito mais.
                </Typography>
            </Box>
        </LayoutCliente>
    );
};

export default InicioClientePage;
