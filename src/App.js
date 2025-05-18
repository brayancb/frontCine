// src/App.js
import React, { useState } from 'react';
import Login from './Components/login';
import Register from './Components/register';
import './styles/App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="background-container">
      <div className="gif-left" style={{ backgroundImage: "url('/cat-eat.gif')" }} />
      <div className="gif-right" style={{ backgroundImage: "url('/cat-eat.gif')" }} />
      <div className="overlay"></div>

      <div className="App">
        <h1>Welcome al cinema de Coquimbo York</h1>
        <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
}


export default App;
