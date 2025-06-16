import axiosBackend from './axios_Backend';

export const getShowtimesByMovieId = async (id: string) => {
  const response = await axiosBackend.get(`/showtimes/movie/${id}`);
  return response.data;
};


