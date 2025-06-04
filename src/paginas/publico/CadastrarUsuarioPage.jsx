import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import LayoutAdmin from '../componentes/LayoutAdmin';

const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
};

const CadastrarUsuarioPage = () => {
    const [formData, setFormData] = useState({
        id: '',
        nome: '',
        cpf: '',
        data_nasc: '',
        email: '',
        telefone: '',
        cep: '',
        rua: '',
        bairro: '',
        numero: '',
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

    const handleSubmit = () => {
        if (!validarCPF(formData.cpf)) {
            alert('CPF inválido!');
            return;
        }

        const camposObrigatorios = ['nome', 'cpf', 'data_nasc', 'email', 'telefone'];
        for (let campo of camposObrigatorios) {
            if (!formData[campo]) {
                alert(`Preencha o campo: ${campo}`);
                return;
            }
        }

        const dadosComId = {
            ...formData,
            id: formData.id || Date.now(),
        };

        alert(`Usuário cadastrado com sucesso!\n\n${JSON.stringify(dadosComId, null, 2)}`);

        setFormData({
            id: '',
            nome: '',
            cpf: '',
            data_nasc: '',
            email: '',
            telefone: '',
            cep: '',
            rua: '',
            bairro: '',
            numero: '',
        });
    };

    return (
        <LayoutAdmin>
            <Box sx={{ maxWidth: 700, mx: 'auto', p: 4 }}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Cadastrar Novo Usuário
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nome" name="nome" value={formData.nome} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="CPF" name="cpf" value={formData.cpf} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Data de Nascimento"
                            name="data_nasc"
                            value={formData.data_nasc}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="E-mail" name="email" value={formData.email} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="CEP" name="cep" value={formData.cep} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <TextField fullWidth label="Rua" name="rua" value={formData.rua} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Bairro" name="bairro" value={formData.bairro} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Número" name="numero" value={formData.numero} onChange={handleChange} />
                    </Grid>
                </Grid>

                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 3 }}>
                    Cadastrar
                </Button>
            </Box>
        </LayoutAdmin>
    );
};

export default CadastrarUsuarioPage;
