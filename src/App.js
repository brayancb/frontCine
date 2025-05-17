// src/App.js
import React, { useState } from 'react';
import Login from './Components/login';
import Register from './Components/register';
import './styles/App.css';


function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <h1>Bienvenido a la App</h1>
      <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
