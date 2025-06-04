import React from 'react';
import { Box, Typography } from '@mui/material';
import Layout from '../../componentes/Layout';

const BoletosPage = () => {
    return (
        <Layout>
            <Box
                sx={{
                    textAlign: 'center',
                    mt: 10,
                }}
            >
                <Box
                    component="img"
                    src="/assets/em-breve.png"
                    alt="Página em construção"
                    sx={{ maxWidth: 250, mb: 4 }}
                />

                <Typography variant="h4" gutterBottom color="text.primary" fontWeight="bold">
                    Página de Boletos
                </Typography>

                <Typography variant="h6" color="text.secondary">
                    Esta funcionalidade estará disponível em breve.
                </Typography>
            </Box>
        </Layout>
    );
};

export default BoletosPage;
