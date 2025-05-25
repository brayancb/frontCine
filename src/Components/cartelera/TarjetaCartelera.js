import React from 'react';
import '../../styles/tarjetaCartelera.css';

function TarjetaCartelera({ movie }) {
  return (
    <div className="tarjeta-cartelera">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default TarjetaCartelera;
