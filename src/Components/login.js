import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { loginUser } from "../API/userService";
import { useAuth } from "../auth/authProvider";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });
      login(data.access_token);
      setMensaje("Inicio de sesión exitoso");
    } catch (error) {
      setMensaje(
        error?.response?.data?.message || "Error en el inicio de sesión"
      );
    }
  };
  return (
    <div className="login-container">
      {/* Botón en esquina superior izquierda */}
      <div className="btn-cartelera-container">
        <Link to="/cartelera" className="btn-cartelera">
          Cartelera
        </Link>
      </div>

      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
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
        <button type="submit">Entrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Login;
