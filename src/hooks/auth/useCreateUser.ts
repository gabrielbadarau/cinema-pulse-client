import { useNavigate } from 'react-router';

import { createUser } from '@/api/authApi';
import { useMutation } from '@tanstack/react-query';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: { name: string; email: string; password: string }) =>
      createUser(data.name, data.email, data.password),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error: Error) => {
      console.error('Error registering user:', error.message);
    },
  });
};
