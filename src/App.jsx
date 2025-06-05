import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import TemaProjeto from './tema/TemaProjeto';

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
import LayoutAdmin from './componentes/LayoutAdmin';
import DashboardAdminPage from './paginas/administrador/DashboardAdminPage';
import GerenciarDocumentosPage from './paginas/administrador/GerenciarDocumentosPage';
import UsuariosAdminPage from './paginas/administrador/UsuariosAdminPage';
import CadastrarUsuarioPage from './paginas/administrador/CadastrarUsuarioPage';
import AdminUsuarios from './paginas/administrador/AdminUsuarios';
import RelatoriosPage from './paginas/administrador/RelatoriosPage';
import ConfiguracoesPage from './paginas/administrador/ConfiguracoesPage';

const App = () => {
  return (
    <ThemeProvider theme={TemaProjeto}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* 🌐 Página Inicial */}
          <Route path="/" element={<IndexPage />} />

          {/* 🌐 Páginas */}
          <Route path="/loginCliente" element={<LoginClientePage />} />
          <Route path="/loginAdmin" element={<LoginAdminPage />} />

          {/* 👤 Cliente */}
          <Route path="/cliente/inicio" element={<InicioClientePage />} />
          <Route path="/cliente/boletos" element={<BoletosPage />} />
          <Route path="/cliente/obras" element={<ObrasPage />} />
          <Route path="/cliente/assistencia" element={<AssistenciaPage />} />
          <Route path="/cliente/documentos" element={<DocumentosPage />} />

          {/* 🔒 Admin */}

          <Route path="/admin/dashboard" element={
            <LayoutAdmin>
              <DashboardAdminPage />
            </LayoutAdmin>
          } />

          <Route path="/admin/gerenciar-documentos" element={
            <LayoutAdmin>
              <GerenciarDocumentosPage />
            </LayoutAdmin>
          } />

          <Route path="/admin/usuarios" element={
            <LayoutAdmin>
              <UsuariosAdminPage />
            </LayoutAdmin>
          } />

          <Route path="/admin/usuarios/novo" element={
            <LayoutAdmin>
              <CadastrarUsuarioPage />
            </LayoutAdmin>
          } />

          <Route path="/admin/portal" element={
            <LayoutAdmin>
              <AdminUsuarios />
            </LayoutAdmin>
          } />

          <Route path="/admin/relatorios" element={
            <LayoutAdmin>
              <RelatoriosPage />
            </LayoutAdmin>
          } />

          <Route path="/admin/configuracoes" element={
            <LayoutAdmin>
              <ConfiguracoesPage />
            </LayoutAdmin>
          } />

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
