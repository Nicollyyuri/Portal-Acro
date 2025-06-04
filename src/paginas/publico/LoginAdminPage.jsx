import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginAdminPage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulação simples de autenticação
        if (usuario === 'admin' && senha === '123') {
            navigate('/admin/dashboard');
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

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
            <Paper
                elevation={6}
                sx={{
                    width: '100%',
                    maxWidth: 480,
                    p: 4,
                    borderRadius: 4,
                    textAlign: 'center',
                }}
            >
                {/* Logo */}
                <img
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    style={{ width: '70%', marginBottom: 16 }}
                />

                {/* Título e Descrição */}
                <Typography variant="h5" gutterBottom>
                    Portal do Administrador
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                    Acesse o painel de administração para gerenciar usuários, obras e documentos.
                </Typography>

                {/* Formulário */}
                <Box component="form" onSubmit={handleLogin}>
                    <TextField
                        fullWidth
                        label="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        margin="normal"
                        required
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 5, py: 1.5, fontSize: '1rem' }}
                    >
                        Entrar
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginAdminPage;
