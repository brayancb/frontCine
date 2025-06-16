//falta conectar cuando se seleccione una película en cartelera redireccione a esta pagina con la id
//por ahora se accede mediante usando manualmente id de la película

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../API/movieService';
import { getShowtimesByMovieId } from '../../API/showtimeService';

function InfoPage() {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [error, setError] = useState('');
    const [showtimes, setShowtimes] = useState([]);

    //Este bloque de codigo obtiene pelicula con su showtime especifico
    //y muestra los primeros 5 horarios de la pelicula
    useEffect(() => {
<<<<<<< HEAD
        if (!id) return;

        getMovieById(id)
=======
        getMovieById(id) //---> aqui
>>>>>>> 174a0abd99b868b74065d594417bc61c9e8b4671
            .then((data) => setPelicula(data))
            .catch(() => setError('No se pudo cargar la información de la película'));

        getShowtimesByMovieId(id)
            .then((data) => {
            //Ordenar por fecha y hora más cercanos
            const sorted = data.sort((a, b) => {
                const dateA = new Date(`${a.date}T${a.time}`);
                const dateB = new Date(`${b.date}T${b.time}`);
                return dateA.getTime() - dateB.getTime();
            });

            //Esto muestra los primeros 5 horarios de la pelicula
            setShowtimes(sorted.slice(0, 5));
            })
            .catch(() => console.error('Error al obtener showtimes'));
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

            <h2>Próximos horarios (5)</h2>
            {showtimes.length === 0 ? (
            <p>No hay horarios disponibles para esta película.</p>
            ) : (
            <ul>
                {showtimes.map(({ _id, date, time, roomName, language, projectionType, price }) => (
                <li key={_id}>
                    <strong>{date}</strong> – {time} en sala <em>{roomName}</em> – {language || 'idioma no especificado'} – {projectionType} – ${price}
                </li>
                ))}
            </ul>
            )}

        </div>
    );
}

export default InfoPage;