import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Alert,
    Snackbar,
    Divider,
} from '@mui/material';
import { HelpOutline } from '@mui/icons-material';
import LayoutCliente from '../../componentes/LayoutCliente';

const AssistenciaPage = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!titulo.trim() || !descricao.trim()) {
            alert('Preencha todos os campos antes de enviar.');
            return;
        }

        setSuccess(true);
        setTitulo('');
        setDescricao('');
    };

    return (
        <LayoutCliente>
            <Box sx={{ maxWidth: 700, mx: 'auto', py: 5, px: 3, mt: 13 }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: { xs: 3, md: 4 },
                        borderRadius: 3,
                        backgroundColor: 'primary',
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mb={3}
                        gap={1}
                    >
                        <Typography variant="h4" fontWeight="bold" textAlign="center">
                            Solicitação de Assistência
                        </Typography>
                        <HelpOutline color="text.primary" fontSize="large" />
                    </Box>

                    <Divider sx={{ mb: 3 }} />

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Título do Problema"
                            name="titulo"
                            margin="normal"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
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
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{
                                mt: 3,
                                py: 1.4,
                                fontSize: '1.05rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: 2,
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
                    <Alert
                        severity="success"
                        onClose={() => setSuccess(false)}
                        sx={{ fontSize: '1.5rem' }}
                    >
                        Solicitação enviada com sucesso!
                    </Alert>
                </Snackbar>
            </Box>
        </LayoutCliente>
    );
};

export default AssistenciaPage;
