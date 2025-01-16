import { useNavigate } from 'react-router';

import { createUser } from '@/api/authApi';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';

export const useRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      createUser(data.name, data.email, data.password),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        description: error.message,
      });
    },
  });
};
