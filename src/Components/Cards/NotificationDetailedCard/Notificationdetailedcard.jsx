import React from 'react';

export default function Notificationdetailedcard({ notification }) {
  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return '05 May 2025';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return '06:15 PM';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className='bg-zinc-100 dark:bg-gray-700 text-black dark:text-gray-100 rounded-xl p-7 overflow-y-auto h-full transition-colors duration-300'>
      <div className='flex justify-between items-start'>
        <div className='flex-1'>
          <p className='font-bold text-xl'>
            {notification.title || notification.alert || 'Notification'}
          </p>
          {notification.severity && (
            <span className={`inline-block px-2 py-1 mt-2 rounded text-sm font-semibold
              ${notification.severity === 'high' || notification.severity === 'critical' 
                ? 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200' 
                : notification.severity === 'medium'
                ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                : 'bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
              {notification.severity.toUpperCase()}
            </span>
          )}
        </div>
        <div className='text-right ml-4'>
          <p className='text-sm'>{formatDate(notification.date || notification.timestamp)}</p>
          <p className='text-sm'>{formatTime(notification.date || notification.timestamp)}</p>
        </div>
      </div>

      <div className='my-5 space-y-4'>
        {/* Main Description */}
        <div>
          <p className='text-gray-700 dark:text-gray-300'>
            {notification.description || notification.message || 'No details available for this notification.'}
          </p>
        </div>

        {/* Additional Details */}
        {notification.details && (
          <div>
            <p className='font-semibold mb-2'>Details:</p>
            <p className='text-gray-700 dark:text-gray-300'>
              {notification.details}
            </p>
          </div>
        )}

        {/* Zone/Location Info */}
        {notification.zone && (
          <div>
            <p className='font-semibold'>Zone:</p>
            <p className='text-gray-700 dark:text-gray-300'>{notification.zone}</p>
          </div>
        )}

        {/* Meter Info */}
        {notification.meter_id && (
          <div>
            <p className='font-semibold'>Meter ID:</p>
            <p className='text-gray-700 dark:text-gray-300'>{notification.meter_id}</p>
          </div>
        )}

        {/* Status */}
        {notification.status && (
          <div>
            <p className='font-semibold'>Status:</p>
            <p className='text-gray-700 dark:text-gray-300 capitalize'>{notification.status}</p>
          </div>
        )}
      </div>
    </div>
  );
}