import { useLocation } from 'react-router';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetMovies } from '@/hooks/movies/use-get-movies';
import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';

export const MovieCards = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get('search') || '';

  const { data, isError, error, isFetching } = useGetMovies(searchQuery || '');
  const movies = data?.data.data;

  if (isError) {
    toast({
      variant: 'destructive',
      description:
        (error as AxiosError<{ error: string }>)?.response?.data?.error ||
        'Failed to fetch movies',
    });
  }

  if (isFetching) {
    return <h2>🌀 Loading...</h2>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {movies?.map((card: { original_title: string }, index: number) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.original_title}
            </CardTitle>
            {card.original_title}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.original_title}</div>
            <p className="text-xs text-muted-foreground">
              {card.original_title}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
