// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import Cartelera from './Components/cartelera/cartelera';
import './styles/App.css';

//Importación del cache
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Lib/ClienteCache';

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
    <Router>
      <div className="background-container">
        <div className="gif-left" style={{ backgroundImage: "url('/cat-eat.gif')" }} />
        <div className="gif-right" style={{ backgroundImage: "url('/cat-eat.gif')" }} />
        <div className="overlay"></div>

        <div className="App">
          <h1>Welcome al cinema de Coquimbo York</h1>
          <Routes>
            <Route path="/" element={<LoginRegisterWrapper />} />
            <Route path="/cartelera" element={<Cartelera />} />
          </Routes>
        </div>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

function LoginRegisterWrapper() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <>
      <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
      {isLogin ? <Login /> : <Register />}
    </>
  );
}

export default App;
