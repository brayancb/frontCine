import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/tarjetaCartelera.css';

function TarjetaCartelera({ movie }) {
  return (
    <div className="tarjeta-cartelera">
      <Link to={`/pelicula/${movie._id}`} className="tarjeta-link">
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default TarjetaCartelera;
