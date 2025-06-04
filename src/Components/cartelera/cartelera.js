import React from 'react';
import TarjetaCartelera from './TarjetaCartelera';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function Cartelera() {
  const { data : peliculas, isLoading, isError, Error} = useQuery({
        queryKey: ["peliculas-cartelera"],
        queryFn: async() =>{
          const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/cartelera`);
          return res.data;
        },
        staleTime: 1000*60*5,
  });

  if (isLoading) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Cargando cartelera...</p>;
  }

  if (isError) {
    return <p style={{ textAlign: 'center', marginTop: '40px' }}>Error al obtener las películas: {Error.message}</p>;
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
