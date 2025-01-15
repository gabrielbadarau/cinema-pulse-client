import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Outlet />
    </div>
  );
}
