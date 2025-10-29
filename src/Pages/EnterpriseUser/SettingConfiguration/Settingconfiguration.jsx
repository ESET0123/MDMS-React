import React, { useState } from 'react';

import Settingtabenterprise from '../../../Components/tab/SettingTab/Settingtabenterprise';
import Notificationtab from '../../../Components/tab/NotificationTab/Notificationtab';

export default function Settingconfiguration() {
  const [activeTab, setActiveTab] = useState('setting');
  const activeStyle = 'border-b-2 border-blue-700 text-blue-700 dark:text-white dark:border-white';

  return (
    <div>
      <div>
        <p className='font-bold'>Settings & Notification</p>
        <p>Manage organization-wide configurations and integrations</p>
      </div>
      <div>
        <div className='flex p-12 text-xl font-bold text-zinc-500 justify-around border-b pb-0 border-zinc-400 '>
          <button
            onClick={() => setActiveTab('setting')}
            className={activeTab === 'setting' ? activeStyle : 'cursor-pointer'}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab('notification')}
            className={activeTab === 'notification' ? activeStyle : 'cursor-pointer'}
          >
            Notification
          </button>
        </div>

        <div className='p-4'>
          {activeTab === 'setting' && <Settingtabenterprise />}
          {activeTab === 'notification' && <Notificationtab />}
        </div>
      </div>
    </div>
  )
}
