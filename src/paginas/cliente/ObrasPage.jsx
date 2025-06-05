import React from 'react';
import { Box, Typography } from '@mui/material';
import LayoutCliente from '../../componentes/LayoutCliente';
import EmBreve from '../../componentes/EmBreve';

const ObrasPage = () => {

    return (
        <LayoutCliente>
            <Box
                sx={{
                    textAlign: 'center',
                    mt: 10,
                }}
            >
                <Typography variant="h4" gutterBottom color="text.primary" fontWeight="bold" sx={{ mb: 5 }}>
                    Página de Obras
                </Typography>

                <EmBreve                />

                <Typography variant="h6" color="text.secondary">
                    Esta funcionalidade estará disponível em breve.
                </Typography>
            </Box>
        </LayoutCliente>
    );
};

export default ObrasPage;
