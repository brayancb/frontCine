// src/App.js
import React, { useState } from 'react';
import Login from './Components/login';
import Register from './Components/register';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <h1>Bienvenido a la App</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
