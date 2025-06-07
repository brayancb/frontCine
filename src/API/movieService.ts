import axiosBackend from './axios_Backend';

export const getMovies = async () => {
  const response = await axiosBackend.get('/movies'); 
  return response.data;
};

export const getMovieById = async (id: string) => {
  const response = await axiosBackend.get(`/movies/id/${id}`);
  return response.data;
};
