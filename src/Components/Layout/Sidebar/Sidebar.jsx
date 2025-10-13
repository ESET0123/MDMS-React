import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const getNavClassNames = ({ isActive }) =>
    `flex pt-4 px-4 text-md text-gray-500 ${
      isActive ? ' font-bold text-gray-800' : ''
    }`;

  // const navigate=useNavigate();
  return (
    <div className='flex-column h-full w-full p-2 bg-gray-100'>
      {/* <Button onClick={navigate('/dashboard')} >Dashboard</Button> */}
      <NavLink to="/dashboard" className={getNavClassNames}>Dashboard</NavLink>
      <NavLink to="/" className={getNavClassNames}>Bills & Payment</NavLink>
      <NavLink to="/meterdata" className={getNavClassNames}>Meter Data</NavLink>
      <NavLink to="/notification" className={getNavClassNames}>Alert & Notification</NavLink>
      <NavLink to="/profile" className={getNavClassNames}>Profile & Settings</NavLink>
      <NavLink to="/logs" className={getNavClassNames}>Logs</NavLink>
    </div>
  )
}
