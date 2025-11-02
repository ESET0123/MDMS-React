import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

export default function MainLayout() {
  const location = useLocation();
  const hasSidebar = location.pathname === '/login' || location.pathname === '/forgotpwd' || location.pathname === '/resetpwd' || location.pathname === '/accessdenied';

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-grow '>
        {!hasSidebar && (
          <div className='w-1/5'>
            <Sidebar />
          </div>
        )}
        <div className={`m-5 p-6 overflow-auto ${hasSidebar ? 'w-full' : 'w-4/5'}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}