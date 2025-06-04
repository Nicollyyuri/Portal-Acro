import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DashboardAdminPage = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                px: 2,
                textAlign: 'center',
            }}
        >
            <Box
                component="img"
                src="/imagens/logo-acro.png"
                alt="Logo ACRO"
                onClick={() => navigate('/')}
                sx={{ maxWidth: 160, mb: 4, cursor: 'pointer' }}
            />

            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                color="text.primary"
                sx={{ fontWeight: 'bold', letterSpacing: 1 }}
            >
                Bem-vindo ao painel administrativo
            </Typography>

            <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 700 }}
            >
                Aqui você pode gerenciar usuários, visualizar relatórios,
                alterar configurações do sistema e acompanhar todas as atividades administrativas.
            </Typography>
        </Box>
    );
};

export default DashboardAdminPage;
