//falta conectar cuando se seleccione una película en cartelera redireccione a esta pagina con la id
//por ahora se accede mediante usando manualmente id de la película

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../API/movieService';

function InfoPage() {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        getMovieById(id) //---> aqui
            .then((data) => setPelicula(data))
            .catch((err) => setError('No se pudo cargar la información de la película'));
    }, [id]);

    if (error) {
        return <div className="info-pelicula"><p>{error}</p></div>;
    }

    if (!pelicula) {
        return <div className="info-pelicula"><p>Cargando...</p></div>;
    }

    return (
        <div className="info-pelicula">
            <h1>{pelicula.title}</h1>
            <img src={pelicula.image} alt={pelicula.title} style={{maxWidth: '300px'}} />
            <p><strong>Duración:</strong> {pelicula.duration} min</p>
            <p><strong>Sinopsis:</strong> {pelicula.synopsis}</p>
        </div>
    );
}

export default InfoPage;