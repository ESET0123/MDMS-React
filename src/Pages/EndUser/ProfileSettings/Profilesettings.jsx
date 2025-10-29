import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Profiletab from '../../../components/tab/ProfileTab/Profiletab';
import Securitytab from '../../../components/tab/SecurityTab/Securitytab';
import Notificationtab from '../../../components/tab/NotificationTab/Notificationtab';

export default function Profilesettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const activeStyle = 'border-b-2 border-blue-700 text-blue-700 dark:text-white dark:border-white';

  return (
    <div>
      <div>
        <p className='font-bold'>Profile & Settings</p>
      </div>
      <div>
        <div className='flex p-12 text-xl font-bold text-zinc-500 justify-around border-b pb-0 border-zinc-400 '>
          <button
            onClick={() => setActiveTab('profile')}
            className={activeTab === 'profile' ? activeStyle : 'cursor-pointer'}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={activeTab === 'security' ? activeStyle : 'cursor-pointer'}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab('notification')}
            className={activeTab === 'notification' ? activeStyle : 'cursor-pointer'}
          >
            Notification
          </button>
        </div>
        
        <div className='p-4'>
          {activeTab === 'profile' && <Profiletab />}
          
          {activeTab === 'security' && <Securitytab />}
          {activeTab === 'notification' && <Notificationtab />}
        </div>
      </div>
    </div>
  );
}