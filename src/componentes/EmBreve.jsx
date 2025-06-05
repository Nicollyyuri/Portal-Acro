import React from 'react';
import { Box } from '@mui/material';

const EmBreve = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #1f2f34 0%, #010300 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
            }}
        >
            <Box
                component="img"
                src="/imagens/em-breve.png" 
                alt="Em breve"
                sx={{
                    maxWidth: 320,
                    width: '100%',
                    filter: 'drop-shadow(0px 0px 6px white)',
                }}
            />
        </Box>
    );
};

export default EmBreve;
