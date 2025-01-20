import axiosClient from './axiosClient';

export const searchMovies = (searchQuery: string) =>
  axiosClient.get('/movies', { params: { search: searchQuery } });

export const searchMovieById = async (id: number) => {
  axiosClient.get(`/movies/${id}`);
};
