import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';

import { logout } from '@/api/authApi';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const useLogout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      localStorage.removeItem('accessToken-cinema-pulse-api');
      navigate('/login', { replace: true });
    },
    onError: (error: AxiosError<{ error: string }>) => {
      console.log(error);
      toast({
        variant: 'destructive',
        description: error.response?.data?.error || error.message,
      });
    },
  });
};
