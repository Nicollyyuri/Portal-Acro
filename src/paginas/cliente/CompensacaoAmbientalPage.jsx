import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { Recycling, Public, Forest } from '@mui/icons-material';


const indicadores = [
    { id: 'arvores', label: 'Árvores Plantadas', icon: <Forest fontSize="large" />, target: 8500 },
    { id: 'co2', label: 'CO₂ Compensado (ton)', icon: <Public fontSize="large" />, target: 320 },
    { id: 'areas', label: 'Áreas de Preservação', icon: <Recycling fontSize="large" />, target: 27 }
];

const Contador = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const step = Math.ceil(target / (duration / 30));
        const interval = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(start);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [target]);

    return <Typography variant="h4" fontWeight="bold">{count.toLocaleString()}</Typography>;
};

const CompensacaoAmbientalPage = () => {
    return (
        <Box sx={{ py: 6, px: 3, backgroundColor: '#f4f9f4', minHeight: '100vh' }}>
            {/* Cabeçalho */}
            <Box textAlign="center" mb={6}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    🌱 Nossa Compensação Ambiental
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Veja como sua compra contribui para um futuro mais sustentável.
                </Typography>
            </Box>

            {/* Painel de Indicadores */}
            <Grid container spacing={4} justifyContent="center">
                {indicadores.map(({ id, label, icon, target }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <Paper elevation={4} sx={{
                            p: 4,
                            textAlign: 'center',
                            backgroundColor: '#ffffff',
                            borderRadius: 4
                        }}>
                            <Box sx={{ color: '#2e7d32', mb: 2 }}>{icon}</Box>
                            <Contador target={target} />
                            <Typography variant="subtitle1" color="textSecondary">{label}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CompensacaoAmbientalPage;
