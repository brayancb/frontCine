import React from "react";

function TestLogin() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "#000" }}>
      <h2>🎬 Bienvenido al panel del Cine Coquimbo York</h2>
      <p>Has iniciado sesión correctamente</p>

      <img
        src="/cat-eat.gif"
        style={{ width: "200px", marginTop: "20px", borderRadius: "8px" }}
      />

      <br />

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default TestLogin;
