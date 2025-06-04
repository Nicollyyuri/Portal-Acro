import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../../componentes/Layout';

const DashboardClientePage = () => {
    const navigate = useNavigate();

    return (
        <Layout>
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
                <Box
                    component="img"
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    onClick={() => navigate('/dashboard')}
                    sx={{ maxWidth: 160, mb: 4, cursor: 'pointer' }}
                />

                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    color="text.primary"
                    sx={{ fontWeight: 'bold', letterSpacing: 1 }}
                >
                    <br />
                    Bem-vindo ao portal
                </Typography>

                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 700 }}
                >
                    Aqui você consegue acompanhar boletos, andamento de obras,
                    documentos e muito mais.
                </Typography>
            </Box>
        </Layout>
    );
};

export default DashboardClientePage;
