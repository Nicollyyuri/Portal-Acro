import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, useTheme } from '@mui/material';
import { Recycling, Public, Forest } from '@mui/icons-material';
import LayoutCliente from '../../componentes/LayoutCliente';

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
    const theme = useTheme();

    return (
        <LayoutCliente>
            <Box sx={{ py: 6, px: 3, minHeight: '100vh' }}>
                {/* Cabeçalho */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom color="text.primary" mt={2}>
                        🌱 Nossa Compensação Ambiental
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Veja como sua compra contribui para um futuro mais sustentável.
                    </Typography>
                </Box>

                {/* Painel de Indicadores */}
                <Grid container spacing={4} justifyContent="center">
                    {indicadores.map(({ id, label, icon, target }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <Paper
                                elevation={6}
                                sx={{
                                    p: 4,
                                    textAlign: 'center',
                                    backgroundColor: theme.palette.secondary.main,
                                    borderRadius: 4,
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.5)',
                                    color: theme.palette.text.primary,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.7)'
                                    }
                                }}
                            >
                                <Box sx={{ color: theme.palette.primary.contrastText, mb: 2 }}>{icon}</Box>
                                <Contador target={target} />
                                <Typography variant="subtitle1" color="text.secondary">
                                    {label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Texto descritivo dividido ao meio */}
                <Box mt={8} maxWidth="1100px" mx="auto">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        textAlign="center"
                    >
                        🌿 Por que compensamos?
                    </Typography>

                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h7" color="text.secondary" textAlign="justify" sx={{ pr: 2 }}>
                                A natureza é essencial para a vida, fornecendo ar puro, equilíbrio ecológico e abrigo para inúmeras espécies.
                                O progresso exige adaptações, e a construção de novos espaços pode impactar o meio ambiente.
                                Para minimizar esse efeito, adotamos uma iniciativa de compensação verde.
                                A cada árvore retirada, plantamos entre 20 e 25 mudas nativas para reflorestamento.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h7" color="text.secondary" textAlign="justify" sx={{ pl: 2 }}>
                                Nosso objetivo é garantir que o crescimento urbano caminhe junto com a preservação ambiental.
                                As espécies escolhidas para o plantio são nativas da região, promovendo biodiversidade e integração sustentável.
                                Acompanhamos de perto essa iniciativa e incentivamos nossos clientes a se envolverem.
                                Construir o futuro significa evoluir respeitando e revitalizando a natureza.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </LayoutCliente>
    );
};

export default CompensacaoAmbientalPage;
