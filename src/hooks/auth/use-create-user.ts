import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';

import { createUser } from '@/api/authApi';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      createUser(data.name, data.email, data.password),
    onSuccess: () => {
      navigate('/login', { replace: true });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast({
        variant: 'destructive',
        description: error.response?.data?.message || error.message,
      });
    },
  });
};
