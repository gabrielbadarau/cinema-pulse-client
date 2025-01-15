import MainLayout from '@/layouts/MainLayout';
import LoginPage from '@/pages/Auth/Login';
import RegisterPage from '@/pages/Auth/Register';
import NotFound from '@/pages/NotFound';

import { Route, Routes } from 'react-router';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
