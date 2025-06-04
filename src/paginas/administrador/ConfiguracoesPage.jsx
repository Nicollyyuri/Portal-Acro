import React from 'react';
import { Box, Typography } from '@mui/material';
import emBreveImg from '../../assets/em-breve.png'; // ajuste se estiver em outra pasta

const ConfiguracoesPage = () => {
    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 3,
            }}
        >
            <Box
                component="img"
                src={emBreveImg}
                alt="Em construção"
                sx={{ width: 200, mb: 3 }}
            />

            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Configurações em Breve
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth={500}>
                Esta seção está em fase de desenvolvimento. Em breve você poderá ajustar
                preferências, segurança e personalizações do sistema.
            </Typography>
        </Box>
    );
};

export default ConfiguracoesPage;
