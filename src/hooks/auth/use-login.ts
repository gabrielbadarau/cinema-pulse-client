import { useNavigate } from 'react-router';

import { login } from '@/api/authApi';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const useLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      login(data.email, data.password),
    onSuccess: (response) => {
      const accessToken = response?.data?.accessToken;
      if (accessToken) {
        localStorage.setItem('accessToken-cinema-pulse-api', accessToken);
        navigate('/', { replace: true });
      } else {
        toast({
          variant: 'destructive',
          description: 'No access token received.',
        });
      }
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};
