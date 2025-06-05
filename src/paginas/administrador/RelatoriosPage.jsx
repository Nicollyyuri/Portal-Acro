import React from 'react';
import { Box, Typography } from '@mui/material';

const RelatoriosPage = () => {
    return (
        <Box
                    sx={{
                        textAlign: 'center',
                        mt: 10,
                    }}
                >
                    <Typography variant="h4" gutterBottom color="text.primary" fontWeight="bold" sx={{ mb: 5 }}>
                        Página de Relatórios
                    </Typography>
        
                    <Box
                        component="img"
                        src="/imagens/em-breve.png"
                        alt="Página em construção"
                        sx={{ maxWidth: 500, mb: 3 }}
                    />
        
                    <Typography variant="h6" color="text.secondary">
                        Esta funcionalidade estará disponível em breve.
                    </Typography>
                </Box>
    );
};

export default RelatoriosPage;
