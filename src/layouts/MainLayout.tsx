import { Outlet } from 'react-router';

import { Toaster } from '@/components/ui/toaster';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Outlet />
      <Toaster />
    </div>
  );
}
