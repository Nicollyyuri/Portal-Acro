import { createTheme } from '@mui/material/styles';

// Criação do tema personalizado do projeto
const TemaProjeto = createTheme({
    // Define o modo como "dark" (modo escuro)
    palette: {
        mode: 'dark',

        // Cor primária (usada em botões, AppBar, etc.)
        primary: {
            main: '#314C53',          // Azul acinzentado escuro
            contrastText: '#F7F8FC',  // Texto claro por cima do botão primário
        },

        // Cor secundária (usada em elementos complementares)
        secondary: {
            main: '#5A7F78',          // Verde acinzentado
            contrastText: '#F7F8FC',  // Texto claro por cima do botão secundário
        },

        // Cores de fundo da aplicação
        background: {
            default: '#010300',       // Fundo geral da aplicação (quase preto)
            paper: '#314C53',         // Fundo de componentes como Card e Paper
        },

        // Cores de texto
        text: {
            primary: '#F7F8FC',       // Texto principal (claro)
            secondary: '#BBDEC6',     // Texto secundário (verde claro suave)
        },
    },

    // Configuração de tipografia
    typography: {
        fontFamily: 'Arial, sans-serif',  // Fonte padrão

        // Título principal
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },

        // Subtítulo ou seção
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },

        // Texto normal
        body1: {
            fontSize: '1rem',
        },
    },

    // Estilos específicos para componentes (sobrescrevendo o padrão do MUI)
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,           // Cantos arredondados para os botões
                    padding: '10px 24px',       // Espaçamento interno personalizado
                    textTransform: 'none',      // Mantém o texto dos botões com capitalização normal
                },
            },
        },
    },
});

// Exporta o tema para ser usado no <ThemeProvider> do React
export default TemaProjeto;
