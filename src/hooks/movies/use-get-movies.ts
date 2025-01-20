import { useQuery } from '@tanstack/react-query';

import { searchMovies } from '@/api/moviesApi';

export const useGetMovies = (searchQuery: string) => {
  return useQuery({
    queryKey: ['searchMovies', searchQuery],
    queryFn: () => searchMovies(searchQuery),
    enabled: !!searchQuery,
  });
};
