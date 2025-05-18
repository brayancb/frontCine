import React, { useState } from 'react';
import '../styles/register.css';
import { registerUser } from '../API/userService'; // Importa la función

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser({ username, email, password }); // Llama a la función

      setMensaje('Registro exitoso');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMensaje(
        error?.response?.data?.message || 'Error en el registro'
      );
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p className={mensaje === 'Registro exitoso' ? 'mensaje-exito' : 'mensaje-error'}>{mensaje}</p>}
    </div>
  );
}

export default Register;