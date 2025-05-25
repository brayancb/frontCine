import axiosBackend from './axios_Backend';

export const getMovies = async () => {
  const response = await axiosBackend.get('/movies'); 
  return response.data;
};
