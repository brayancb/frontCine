import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulación de llamada a backend
    try {
      const response = await fetch('https://tuapi.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password })
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje('Inicio de sesión exitoso');
        // Aquí puedes guardar el token y redirigir al usuario
        localStorage.setItem('token', data.token);
      } else {
        setMensaje(data.error || 'Error en el inicio de sesión');
      }
    } catch (error) {
      setMensaje('Error de conexión con el servidor');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="user" 
          placeholder="Usuario" 
          value={user}
          onChange={(e) => setUser(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;
