import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button
} from '@mui/material';

const UsuarioForm = ({ open, onClose, onSave, initialData }) => {
    const [formData, setFormData] = useState({ nome: '', email: '' });
    const [erros, setErros] = useState({ nome: false, email: false });

    // Preenche dados no modo edição ou limpa no modo novo
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ nome: '', email: '' });
        }
        setErros({ nome: false, email: false });
    }, [initialData, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErros(prev => ({ ...prev, [name]: false }));
    };

    const handleSubmit = () => {
        // Validação simples
        const emailValido = /\S+@\S+\.\S+/.test(formData.email);
        const camposInvalidos = {
            nome: !formData.nome.trim(),
            email: !formData.email.trim() || !emailValido
        };

        if (camposInvalidos.nome || camposInvalidos.email) {
            setErros(camposInvalidos);
            return;
        }

        // Envia os dados
        onSave({ ...formData, id: initialData?.id });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{initialData ? 'Editar Usuário' : 'Novo Usuário'}</DialogTitle>

            <DialogContent>
                <TextField
                    autoFocus
                    fullWidth
                    label="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    margin="normal"
                    required
                    error={erros.nome}
                    helperText={erros.nome ? 'Nome obrigatório' : ''}
                />

                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    error={erros.email}
                    helperText={
                        erros.email
                            ? (!formData.email ? 'Email obrigatório' : 'Email inválido')
                            : ''
                    }
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UsuarioForm;
