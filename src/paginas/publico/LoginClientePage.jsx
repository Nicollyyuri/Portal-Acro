import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginClientePage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (usuario === 'cliente' && senha === '123') {
            navigate('/dashboard');
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
                <img
                    src="/imagens/logo-acro.png"
                    alt="Logo ACRO"
                    style={{ width: '70%', marginBottom: 16 }}
                />

                <Typography variant="h5" gutterBottom>
                    Bem-vindo ao Portal do Cliente
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                    Acompanhe boletos, documentos e atualizações da sua unidade.
                </Typography>

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
                        sx={{ mt: 3, py: 1.5, fontSize: '1rem' }}
                    >
                        Entrar
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 4,
                        width: '100%'
                    }}
                >
                    <Link href="#" underline="none" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                        Primeiro acesso?
                    </Link>
                    <Link href="#" underline="none" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                        Esqueceu a senha?
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
};

export default LoginClientePage;
