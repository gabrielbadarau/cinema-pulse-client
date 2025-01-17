import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const GuestRoute = () => {
  const accessToken = localStorage.getItem('accessToken-cinema-pulse-api');
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/', { replace: true });
    }
  }, []);

  return <Outlet />;
};
