import React, { useState } from "react";
import "../styles/login.css";
import { loginUser } from "../API/userService"; // Importa la función

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password }); // Llama a la función

      setMensaje("Inicio de sesión exitoso");
      localStorage.setItem("token", data.access_token);
      console.log("TOKEN GUARDADO:", data.access_token);
      window.location.reload();
    } catch (error) {
      setMensaje(
        error?.response?.data?.message || "Error en el inicio de sesión"
      );
    }
  };

  return (
    <div className="login-container">
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
