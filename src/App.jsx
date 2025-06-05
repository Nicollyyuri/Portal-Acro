import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'; 
import TemaProjeto from './tema/TemaProjeto';

// Páginas públicas
import IndexPage from './paginas/publico/IndexPage';
import LoginClientePage from './paginas/publico/LoginClientePage';
import LoginAdminPage from './paginas/publico/LoginAdminPage';
import EmBreve from './componentes/EmBreve';

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
          {/* 🌐 Página Inicial */}
          <Route path="/" element={<IndexPage />} />

          {/* 🌐 Páginas */}
          <Route path="/loginCliente" element={<LoginClientePage />} />
          <Route path="/loginAdmin" element={<LoginAdminPage />} />
          <Route path="/embreve" element={<EmBreve />} />

          {/* 👤 Cliente */}
          <Route path="/cliente/inicio" element={<InicioClientePage />} />
          <Route path="/cliente/boletos" element={<BoletosPage />} />
          <Route path="/cliente/obras" element={<ObrasPage />} />
          <Route path="/cliente/assistencia" element={<AssistenciaPage />} />
          <Route path="/cliente/documentos" element={<DocumentosPage />} />

          {/* 🔒 Admin */}
          <Route path="/admin/dashboard" element={<DashboardAdminPage />} />
          <Route path="/admin/usuarios" element={<UsuariosAdminPage />} />
          <Route path="/admin/usuarios/novo" element={<CadastrarUsuarioPage />} />
          <Route path="/admin/portal" element={<AdminUsuarios />} />
          <Route path="/admin/formulario" element={<UsuarioForm />} />
          <Route path="/admin/relatorios" element={<RelatoriosPage />} />
          <Route path="/admin/configuracoes" element={<ConfiguracoesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
