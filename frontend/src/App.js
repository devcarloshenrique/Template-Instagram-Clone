import React from 'react';
// Deve ser colocado em volta de todos os componentes que precisam de acesso as rotas
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

// Componente, arquivo javascript q tem como função retorna um conteúdo jsx
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>

  );
}

export default App;
