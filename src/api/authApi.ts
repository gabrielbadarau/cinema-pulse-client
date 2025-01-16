import axiosClient from './axiosClient';

export const createUser = (name: string, email: string, password: string) =>
  axiosClient.post('/auth/register', {
    name,
    email,
    password,
  });
