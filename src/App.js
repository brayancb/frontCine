// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import Cartelera from './Components/cartelera/cartelera';
import InfoPage from './Components/Pelicula/infoPelicula';
import './styles/App.css';


//Importación del cache
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Lib/ClienteCache';

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
    <Router>
      <div className="background-container">
        <div className="body" style={{ backgroundImage: "url('/COQUIMBO YORK CINEMA.gif')" }} />
        <div className="overlay"></div>

        <div className="App">
          <h1>Welcome al cinema de Coquimbo York</h1>
          <Routes>
            <Route path="/" element={<LoginRegisterWrapper />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route path="/pelicula" element={<InfoPage />} />
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
