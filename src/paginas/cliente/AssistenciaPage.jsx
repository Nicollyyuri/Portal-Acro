import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import Layout from '../../componentes/Layout';

const AssistenciaPage = () => {
    return (
        <Layout>
            <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Solicitação de Assistência
                </Typography>

                <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Título do Problema"
                        name="titulo"
                        margin="normal"
                    />

                    <TextField
                        fullWidth
                        label="Descrição detalhada"
                        name="descricao"
                        multiline
                        rows={4}
                        margin="normal"
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Enviar Solicitação
                    </Button>
                </Paper>
            </Box>
        </Layout>
    );
};

export default AssistenciaPage;
