import React, { useState, useEffect } from 'react';
import Notificationcard from '../../../Components/Cards/NotificationCard/Notificationcard';
import Notificationdetailedcard from '../../../Components/Cards/NotificationDetailedCard/Notificationdetailedcard';
import { API_ENDPOINTS, fetchAPI } from '../../../config/api';

export default function Notification() {
  const [alertData, setAlertData] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlertData = async () => {
      try {
        setLoading(true);
        const data = await fetchAPI(API_ENDPOINTS.alerts);
        setAlertData(data);
        // Set the first notification as selected by default
        if (data && data.length > 0) {
          setSelectedNotification(data[0]);
        }
        setError(null);
      } catch (err) {
        console.error('Failed to fetch alerts:', err);
        setError('Failed to load alerts');
      } finally {
        setLoading(false);
      }
    };

    fetchAlertData();
  }, []);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  if (loading) {
    return (
      <div className='p-2 h-full flex items-center justify-center'>
        <p className='text-xl'>Loading Notifications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-2 h-full flex items-center justify-center'>
        <p className='text-xl text-red-600'>{error}</p>
      </div>
    );
  }

  if (alertData.length === 0) {
    return (
      <div className='p-2 h-full flex items-center justify-center'>
        <p className='text-xl text-gray-500'>No notifications available</p>
      </div>
    );
  }

  return (
    <div className='flex bg-white dark:bg-gray-600 text-black dark:text-white min-h-screen transition-colors duration-300 gap-4'>
      {/* Notification List */}
      <div className='w-2/6 bg-zinc-100 dark:bg-gray-700 rounded-xl overflow-y-auto'>
        {alertData.map((notification, index) => (
          <Notificationcard
            key={notification.id || index}
            title={notification.title || notification.alert || 'Notification'}
            description={notification.description || notification.message || 'No description available'}
            onClick={() => handleNotificationClick(notification)}
            isSelected={selectedNotification?.id === notification.id}
          />
        ))}
      </div>

      {/* Notification Detail */}
      <div className='w-4/6 bg-zinc-100 dark:bg-gray-700 rounded-xl'>
        {selectedNotification ? (
          <Notificationdetailedcard notification={selectedNotification} />
        ) : (
          <div className='flex items-center justify-center h-full'>
            <p className='text-gray-500'>Select a notification to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}