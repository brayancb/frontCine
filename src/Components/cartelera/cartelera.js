import React, { useEffect, useState } from 'react';
import TarjetaCartelera from './TarjetaCartelera';
import axios from 'axios';

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
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {peliculas.map((movie) => (
        <TarjetaCartelera key={movie._id} movie={movie} />
      ))}
    </div>
  );
}

export default Cartelera;
