<<<<<<< HEAD
import React from 'react';
import TarjetaCartelera from './TarjetaCartelera';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate} from 'react-router-dom';

function Cartelera() {
  const navigate = useNavigate();
  const { data : peliculas, isLoading, isError, Error} = useQuery({
        queryKey: ["peliculas-cartelera"],
        queryFn: async() =>{
          const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/cartelera`);
          return res.data;
        },
        staleTime: 1000*60*5,
  });
=======
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import "../../styles/Cartelera.css"

function Cartelera() {
  const {
    data: peliculas,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["peliculas-cartelera"],
    queryFn: async () => {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies/cartelera`)
      return res.data
    },
    staleTime: 1000 * 60 * 5,
  })

  const navigate = useNavigate()

  const handleImageClick = (id) => {
    navigate(`/pelicula/${id}`)
  }
>>>>>>> 174a0abd99b868b74065d594417bc61c9e8b4671

  if (isLoading) {
    return <p className="loading-message">Cargando cartelera...</p>
  }

  if (isError) {
    return <p className="error-message">Error al obtener las películas: {error.message}</p>
  }

  if (peliculas.length === 0) {
    return <p className="empty-message">Películas aún no disponibles</p>
  }

  return (
<<<<<<< HEAD

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Botón para volver */}
      <div className="btn-cartelera-container">
        <button className="btn-cartelera" onClick={() => navigate(-1)}>
          ⬅ Volver
        </button>
      </div>

      {peliculas.map((movie) => (
        <TarjetaCartelera key={movie._id} movie={movie} />
=======
    <div className="cartelera-container">
      {peliculas.map((pelicula) => (
        <div key={pelicula._id} className="pelicula-card">
          <img
            src={pelicula.image || "/placeholder.svg"}
            alt={pelicula.title}
            onClick={() => handleImageClick(pelicula._id)}
            className="pelicula-image"
          />
          <h3 className="pelicula-title">{pelicula.title}</h3>
        </div>
>>>>>>> 174a0abd99b868b74065d594417bc61c9e8b4671
      ))}
    </div>
  )
}

export default Cartelera
