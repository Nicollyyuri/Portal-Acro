import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const IndexPage = () => (
  <Box
    sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1f2f34 30%, #010300 90%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      px: 2,
    }}
  >
    {/* Logo */}
    <img
      src="/imagens/logo-acro.png"
      alt="Logo ACRO"
      style={{ maxWidth: 700, marginBottom: 1 }}
    />

    {/* Mensagem de boas-vindas (opcional) */}
    <Typography
      variant="h5"
      sx={{ color: '#fff', mt: 2, mb: 6 }}
    >
      Acesse seu painel:
    </Typography>

    {/* Botão Cliente */}
    <Box sx={{ mt: 2 }}>
      <Button
        component={RouterLink}
        to="/loginCliente"
        variant="contained"
        color="primary"
        size="large"
        sx={{
          width: 280,
          py: 1.5,
          fontSize: 'h5.fontSize',
          textTransform: 'none',
          borderRadius: 2,
        }}
      >
        Cliente
      </Button>
    </Box>

    {/* Botão Administrador */}
    <Box sx={{ mt: 4 }}>
      <Button
        component={RouterLink}
        to="/loginAdmin"
        variant="contained"
        color="primary"
        size="large"
        sx={{
          width: 280,
          py: 1.5,
          fontSize: 'h5.fontSize',
          textTransform: 'none',
          borderRadius: 2,
        }}
      >
        Administrador
      </Button>
    </Box>
  </Box>
);

export default IndexPage;
