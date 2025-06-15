import React, { useState } from 'react';

function SubirPelicula() {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    synopsis: '',
    image: null,
    inCartelera: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('title', formData.title);
    payload.append('duration', formData.duration);
    payload.append('synopsis', formData.synopsis);
    payload.append('inCartelera', formData.inCartelera);
    payload.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:3000/movies/upload', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Error al subir la película');
      }

      const result = await response.json();
      alert('Película subida correctamente');
      console.log(result);

      // Limpia el formulario
      setFormData({
        title: '',
        duration: '',
        synopsis: '',
        image: null,
        inCartelera: false,
      });
    } catch (error) {
      console.error(error);
      alert('Hubo un error al subir la película');
    }
  };

  return (
    <div>
      <h2>Subir Película</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="duration"
          placeholder="Duración"
          value={formData.duration}
          onChange={handleChange}
          required
        /><br />
        <textarea
          name="synopsis"
          placeholder="Sinopsis"
          value={formData.synopsis}
          onChange={handleChange}
          required
        /><br />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        /><br />
        <label>
          <input
            type="checkbox"
            name="inCartelera"
            checked={formData.inCartelera}
            onChange={handleChange}
          />
          ¿Disponible en cartelera?
        </label><br />
        <button type="submit">Subir Película</button>
      </form>
    </div>
  );
}

export default SubirPelicula;
