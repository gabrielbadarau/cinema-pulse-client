import axiosClient from './axiosClient';

export const createUser = (name: string, email: string, password: string) =>
  axiosClient.post('/auth/register', {
    name,
    email,
    password,
  });

export const login = (email: string, password: string) =>
  axiosClient.post(
    '/auth/login',
    {
      email,
      password,
    },
    { withCredentials: true }
  );

export const logout = () =>
  axiosClient.post('/auth/logout', {}, { withCredentials: true });
