import { useQuery } from '@tanstack/react-query';

import { searchMovieById } from '@/api/moviesApi';

export const useGetMovie = (id: number) => {
  return useQuery({
    queryKey: ['searchMovie', id],
    queryFn: () => searchMovieById(id),
  });
};
