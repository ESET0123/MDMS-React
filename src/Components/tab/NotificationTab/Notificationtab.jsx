import React, { useState } from 'react';
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton';
import ToggleButton from '../../ui/Button/ToggleButton/ToggleButton';

export default function Notificationtab() {
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
    push: false,
  });

  const handleToggle = (notificationType) => {
    setNotifications(prevState => ({
      ...prevState,
      [notificationType]: !prevState[notificationType],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Notification preferences saved successfully!');
    // await fetch('/api/notifications', {
    //   method: 'POST',
    //   body: JSON.stringify(notifications),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  return (
    <div className='m-5 w-2/3 p-4 justify-self-center'>
      <form onSubmit={handleSubmit}>
        <div className='justify-self-center mb-6'>
          <p className='text-lg font-semibold'>You can get notifications from</p>
        </div>

        <div className='w-2/3 justify-self-center'>
          <div className='flex my-4 justify-between items-center'>
            <p>Email</p>
            <ToggleButton
              isChecked={notifications.email}
              onToggle={() => handleToggle('email')}
            />
          </div>

          <div className='flex my-4 justify-between items-center'>
            <p>SMS</p>
            <ToggleButton
              isChecked={notifications.sms}
              onToggle={() => handleToggle('sms')}
            />
          </div>

          <div className='flex my-4 justify-between items-center'>
            <p>Push</p>
            <ToggleButton
              isChecked={notifications.push}
              onToggle={() => handleToggle('push')}
            />
          </div>
        </div>

        <div className='mt-6'>
          <Submitbutton title="Save & continue" />
        </div>
      </form>
    </div>
  );
}
