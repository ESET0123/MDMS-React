import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../context/AuthContext';
import { ROLE_ROUTES } from '../../../config/roleConfig';

export default function Sidebar() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const getNavClassNames = ({ isActive }) =>
    `flex pt-4 text-md transition-colors duration-300 ${isActive
      ? 'font-bold text-zinc-800 dark:text-white'
      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white'
    }`;

  const userRoutes = user ? ROLE_ROUTES[user.role] || [] : [];

  return (
    <div className='flex-column h-full w-full p-2 px-6 py-4 bg-zinc-100 dark:bg-gray-700 transition-colors duration-300'>
      {/* <div>
        <p>
          {user?.name}
          {user?.role}
        </p>
      </div> */}

      {userRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          className={getNavClassNames}
        >
          {t(route.label)}
        </NavLink>
      ))}
    </div>
  );
}