import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginAdminPage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erroLogin, setErroLogin] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (usuario.trim() === 'admin' && senha.trim() === '123') {
            setErroLogin(false);
            navigate('/admin/dashboard');
        } else {
            setErroLogin(true);
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
                <Box
                    component="img"
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    sx={{ width: '70%', mb: 2 }}
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
                        autoComplete="username"
                        inputProps={{ 'aria-label': 'usuário' }}
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        margin="normal"
                        required
                        error={erroLogin}
                    />
                    <TextField
                        fullWidth
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        inputProps={{ 'aria-label': 'senha' }}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        margin="normal"
                        required
                        error={erroLogin}
                        helperText={erroLogin ? 'Usuário ou senha inválidos' : ''}
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
