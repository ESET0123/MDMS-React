import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const getNavClassNames = ({ isActive }) =>
    `flex pt-4 px-4 text-md transition-colors duration-300 ${
      isActive
        ? 'font-bold text-gray-800 dark:text-white'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
    }`;

  return (
    // Update the sidebar container's background color
    <div className='flex-column h-full w-full p-2 bg-gray-100 dark:bg-gray-700 transition-colors duration-300'>
      <NavLink to="/dashboard" className={getNavClassNames}>Dashboard</NavLink>

      {/* End User */}
      <NavLink to="/billpayment" className={getNavClassNames}>Bills & Payment</NavLink>
      <NavLink to="/meterdata" className={getNavClassNames}>Meter Data</NavLink>
      <NavLink to="/notification" className={getNavClassNames}>Alert & Notification</NavLink>
      <NavLink to="/profile" className={getNavClassNames}>Profile & Settings</NavLink>

      {/* Zone user */}
      <NavLink to="/metermanagement" className={getNavClassNames}>Meter Management</NavLink>
      <NavLink to="/usermanagement" className={getNavClassNames}>User Management</NavLink>
      <NavLink to="/reportanalytics" className={getNavClassNames}>Reports & Analytics</NavLink>
      <NavLink to="/settingnotification" className={getNavClassNames}>Setting & Notification</NavLink>

      <NavLink to="/zonemanagement" className={getNavClassNames}>Zone Management</NavLink>
    </div>
  );
}
