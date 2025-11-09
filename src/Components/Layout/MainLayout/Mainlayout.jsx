import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

export default function MainLayout() {
  const location = useLocation();
  const hasSidebar = location.pathname === '/login' || location.pathname === '/forgotpwd' || location.pathname === '/resetpwd' || location.pathname === '/accessdenied';

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Header />
      </div>

      <div className='flex flex-grow pt-16'>
        {!hasSidebar && (
          <div className='w-1/5 fixed left-0 top-16 bottom-0 overflow-y-auto'>
            <Sidebar />
          </div>
        )}

        <div
          className={`m-5 px-8 py-5 overflow-auto rounded-lg flex-grow ${hasSidebar ? 'w-full' : 'w-4/5 ml-[20%]'
            }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}