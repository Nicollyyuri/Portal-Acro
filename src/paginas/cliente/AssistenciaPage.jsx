import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
    Snackbar,
} from '@mui/material';
import LayoutCliente from '../../componentes/LayoutCliente';

const AssistenciaPage = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação simples
        if (!titulo.trim() || !descricao.trim()) {
            alert('Preencha todos os campos antes de enviar.');
            return;
        }

        // Simular envio
        setSuccess(true);
        setTitulo('');
        setDescricao('');
    };

    return (
        <LayoutCliente>
            <Box sx={{ maxWidth: 700, mx: 'auto', py: 4, px: 2 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    fontWeight="bold"
                    textAlign="center"
                >
                    Solicitação de Assistência
                </Typography>

                <Paper elevation={4} sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Título do Problema"
                            name="titulo"
                            margin="normal"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            label="Descrição detalhada"
                            name="descricao"
                            multiline
                            rows={5}
                            margin="normal"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                mt: 3,
                                py: 1.2,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                            }}
                        >
                            Enviar Solicitação
                        </Button>
                    </form>
                </Paper>

                <Snackbar
                    open={success}
                    autoHideDuration={4000}
                    onClose={() => setSuccess(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert severity="success" onClose={() => setSuccess(false)}>
                        Solicitação enviada com sucesso!
                    </Alert>
                </Snackbar>
            </Box>
        </LayoutCliente>
    );
};

export default AssistenciaPage;
