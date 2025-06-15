import React, { useEffect, useState } from 'react';
import TarjetaCartelera from './TarjetaCartelera';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cartelera() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/cartelera`);
        setPeliculas(res.data);
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeliculas();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Cargando cartelera...</p>;
  }

  if (peliculas.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Películas aún no disponibles</p>;
  }

  return (
    <div>
      {/* Botón para ir al formulario */}
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Link to="/subir">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>
            Agregar Película a Cartelera
          </button>
        </Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {peliculas.map((movie) => (
          <TarjetaCartelera key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Cartelera;
