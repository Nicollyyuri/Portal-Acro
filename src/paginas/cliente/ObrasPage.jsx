import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../../componentes/Layout';

const ObrasPage = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Box
                    component="img"
                    src='../assets/logo-acro.png'
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
                    Obras - Em breve
                </Typography>

                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 700 }}
                >
                    Acompanhe aqui o status das obras, prazos de entrega e informações completas dos empreendimentos.
                </Typography>
            </Box>
        </Layout>
    );
};

export default ObrasPage;
