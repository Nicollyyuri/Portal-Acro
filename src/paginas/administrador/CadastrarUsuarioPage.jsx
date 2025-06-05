import React, { useState } from 'react';
import {
    Box, TextField, Button, Typography, Grid, Paper, Divider, InputAdornment
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NumbersIcon from '@mui/icons-material/Numbers';

const CadastrarUsuarioPage = () => {
    const [formData, setFormData] = useState({
        nome: '', cpf: '', data_nascimento: '', email: '', telefone: '',
        cep: '', rua: '', bairro: '', numero: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'cep' && value.length === 8) {
            buscarCEP(value);
        }
    };

    const buscarCEP = async (cep) => {
        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await res.json();
            if (!data.erro) {
                setFormData((prev) => ({
                    ...prev,
                    rua: data.logradouro || '',
                    bairro: data.bairro || '',
                }));
            } else {
                alert('CEP inválido.');
            }
        } catch {
            alert('Erro ao buscar o CEP.');
        }
    };

    const formatDateToYMD = (dateStr) => {
        const date = new Date(dateStr);
        if (isNaN(date)) return '';
        return `${date.getFullYear()}-${(`0${date.getMonth() + 1}`).slice(-2)}-${(`0${date.getDate()}`).slice(-2)}`;
    };

    const handleSubmit = async () => {
        const camposObrigatorios = ['nome', 'cpf', 'data_nascimento', 'email', 'telefone', 'numero'];
        for (let campo of camposObrigatorios) {
            if (!formData[campo]) {
                alert(`Preencha o campo: ${campo}`);
                return;
            }
        }

        const payload = {
            ...formData,
            data_nascimento: formatDateToYMD(formData.data_nascimento),
        };

        try {
            const response = await fetch('http://localhost:3030/api/customers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error(`Erro: ${response.status}`);

            const result = await response.json();
            alert(`Usuário cadastrado com sucesso!\n\n${JSON.stringify(result, null, 2)}`);

            setFormData({
                nome: '', cpf: '', data_nascimento: '', email: '', telefone: '',
                cep: '', rua: '', bairro: '', numero: '',
            });

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Verifique o console para mais detalhes.');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 3,
            }}
        >
            <Paper elevation={6} sx={{
                p: 5,
                maxWidth: 1000,
                width: '100%',
                borderRadius: 3,
            }}>
                <Typography variant="h4" gutterBottom fontWeight="bold" textAlign="center">
                    Cadastrar Novo Usuário
                </Typography>

                <Divider sx={{ my: 3 }} />

                {/* Dados Pessoais */}
                <Typography variant="h6" gutterBottom>
                    Dados Pessoais
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="CPF" name="cpf" value={formData.cpf} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CreditCardIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth type="date" label="Data de Nascimento" name="data_nascimento"
                            value={formData.data_nascimento} onChange={handleChange}
                            InputLabelProps={{ shrink: true, sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <CalendarTodayIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Contato */}
                <Typography variant="h6" gutterBottom>
                    Contato
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="E-mail" name="email" value={formData.email} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="Telefone" name="telefone" value={formData.telefone} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Endereço */}
                <Typography variant="h6" gutterBottom>
                    Endereço
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="CEP" name="cep" value={formData.cep} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="Rua" name="rua" value={formData.rua} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HomeIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth label="Número" name="numero" value={formData.numero} onChange={handleChange}
                            InputLabelProps={{ sx: { fontSize: 16 } }}
                            inputProps={{ style: { fontSize: 16 } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <NumbersIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'right', mt: 4 }}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
                        onClick={handleSubmit}
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default CadastrarUsuarioPage;
