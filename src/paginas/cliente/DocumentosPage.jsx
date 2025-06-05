import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
    Chip,
    Paper,
} from '@mui/material';
import Layout from '../../componentes/LayoutCliente';

const documentos = [
    {
        id: 1,
        nome: 'Contrato de Compra e Venda',
        status: 'Assinado',
        url: '/docs/Contrato-de-Compra-e-Venda.pdf',
    },
    {
        id: 2,
        nome: 'Declaração de Quitação',
        status: 'Assinado',
        url: '/docs/Declaracao-de-Quitacao.pdf',
    },
    {
        id: 3,
        nome: 'Declaração de Quitação',
        status: 'Pendente',
        url: '/docs/quitacao_acro_pendente.pdf',
    },
];


const DocumentosPage = () => {
    const handleDownload = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Layout title="Documentos - ACRO">
            <Box maxWidth={1000} mx="auto" py={6} px={3}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    textAlign="center"
                    gutterBottom
                    sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}
                >
                    Seus Documentos
                </Typography>

                <Paper elevation={4} sx={{ mt: 6, p: 4, borderRadius: 3 }}>
                    <List disablePadding>
                        {documentos.map((doc) => (
                            <ListItem
                                key={doc.id}
                                divider
                                sx={{
                                    py: 3,
                                    alignItems: 'flex-start',
                                }}
                                secondaryAction={
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={doc.status !== 'Assinado'}
                                        onClick={() => handleDownload(doc.url)}
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            px: 4,
                                            py: 1.3,
                                            textTransform: 'none',
                                        }}
                                    >
                                        Download
                                    </Button>
                                }
                            >
                                <ListItemText
                                    primary={
                                        <Typography fontSize="1.4rem" fontWeight="500">
                                            {doc.nome}
                                        </Typography>
                                    }
                                    secondary={
                                        <Box mt={1}>
                                            <Chip
                                                label={doc.status}
                                                color={doc.status === 'Assinado' ? 'success' : 'warning'}
                                                size="medium"
                                            />
                                        </Box>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Layout>
    );
};

export default DocumentosPage;
