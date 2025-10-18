import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Profilesettings() {
  const activeStyle = 'border-b-2 border-blue-700 text-blue-700 dark:text-white dark:border-white ';

  return (
    <div>
      <div>
        <p className='font-bold'>Profile & Settings</p>
      </div>
      <div>
        <div className='flex p-12 text-xl font-bold text-zinc-500 justify-around border-b pb-0 border-zinc-400 pb-2'>
          {/* Each NavLink will lead to a different nested route */}
          <NavLink 
            to="profile" 
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Profile
          </NavLink>
          <NavLink 
            to="security" 
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Security
          </NavLink>
          <NavLink 
            to="notification" 
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Notification
          </NavLink>
        </div>
        
        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
