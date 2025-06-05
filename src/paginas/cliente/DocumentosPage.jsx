import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import Layout from '../../componentes/LayoutCliente';

const documentos = [
    { id: 1, nome: 'Contrato de Compra e Venda', status: 'Assinado' },
    { id: 2, nome: 'Declaração de Quitação', status: 'Pendente' },
];

const DocumentosPage = () => {
    return (
        <Layout title="Documentos - ACRO">
            <Box p={2}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    Seus Documentos
                </Typography>

                <List>
                    {documentos.map((doc) => (
                        <ListItem
                            key={doc.id}
                            divider
                            secondaryAction={
                                <Button
                                    variant="outlined"
                                    size="small"
                                    disabled={doc.status !== 'Assinado'}
                                >
                                    Download
                                </Button>
                            }
                        >
                            <ListItemText
                                primary={doc.nome}
                                secondary={`Status: ${doc.status}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Layout>
    );
};

export default DocumentosPage;
