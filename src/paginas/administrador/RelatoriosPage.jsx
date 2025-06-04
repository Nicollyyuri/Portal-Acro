import React from 'react';
import { Box, Typography } from '@mui/material';
import emBreveImg from '../../assets/em-breve.png'; // ajuste se estiver em outra pasta

const RelatoriosPage = () => {
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
                Relatórios em Breve
            </Typography>

            <Typography variant="body1" color="text.secondary" maxWidth={500}>
                A seção de relatórios ainda está sendo finalizada. Em breve você poderá
                gerar estatísticas e exportar dados do sistema.
            </Typography>
        </Box>
    );
};

export default RelatoriosPage;
