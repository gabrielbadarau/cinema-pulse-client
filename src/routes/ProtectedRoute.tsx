import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const ProtectedRoute = () => {
  const accessToken = localStorage.getItem('accessToken-cinema-pulse-api');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/login', { replace: true });
    }
  }, []);

  return <Outlet />;
};
