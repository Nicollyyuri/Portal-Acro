import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import TemaProjeto from './tema/TemaProjeto';

// Layouts
import Layout from './componentes/Layout';           // Layout geral (público/cliente)
import LayoutAdmin from './componentes/LayoutAdmin'; // Layout admin

// Páginas públicas
import IndexPage from './paginas/publico/IndexPage';
import LoginClientePage from './paginas/publico/LoginClientePage';
import LoginAdminPage from './paginas/publico/LoginAdminPage';

// Cliente
import InicioClientePage from './paginas/cliente/InicioClientePage';
import BoletosPage from './paginas/cliente/BoletosPage';
import ObrasPage from './paginas/cliente/ObrasPage';
import AssistenciaPage from './paginas/cliente/AssistenciaPage';
import DocumentosPage from './paginas/cliente/DocumentosPage';

// Admin
import DashboardAdminPage from './paginas/administrador/DashboardAdminPage';
import UsuariosAdminPage from './paginas/administrador/UsuariosAdminPage';
import CadastrarUsuarioPage from './paginas/administrador/CadastrarUsuarioPage';
import AdminUsuarios from './paginas/administrador/AdminUsuarios';
import UsuarioForm from './componentes/UsuarioForm';
import RelatoriosPage from './paginas/administrador/RelatoriosPage';
import ConfiguracoesPage from './paginas/administrador/ConfiguracoesPage';

const App = () => {
  return (
    <ThemeProvider theme={TemaProjeto}>
      <CssBaseline />
      <Router>
        <Routes>

          {/* 🌐 Páginas públicas com Layout padrão */}
         <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="loginCliente" element={<LoginClientePage />} />
            <Route path="loginAdmin" element={<LoginAdminPage />} />
          </Route>

          {/* 👤 Cliente */}
          <Route path="/cliente" element={<Layout />}>
            <Route path="inicio" element={<InicioClientePage />} />
            <Route path="boletos" element={<BoletosPage />} />
            <Route path="obras" element={<ObrasPage />} />
            <Route path="assistencia" element={<AssistenciaPage />} />
            <Route path="documentos" element={<DocumentosPage />} />
          </Route>

          {/* 🔒 Admin */}
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<DashboardAdminPage />} />
            <Route path="usuarios" element={<UsuariosAdminPage />} />
            <Route path="usuarios/novo" element={<CadastrarUsuarioPage />} />
            <Route path="portal" element={<AdminUsuarios />} />
            <Route path="formulario" element={<UsuarioForm />} />
            <Route path="relatorios" element={<RelatoriosPage />} />
            <Route path="configuracoes" element={<ConfiguracoesPage />} />
          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
