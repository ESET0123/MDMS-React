import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import RouterSetup from './router/RouterSetup/RouterSetup';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const { t, i18n } = useTranslation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className='bg-white dark:bg-gray-600 transition-colors duration-300'>
      <div><Toaster toastOptions={{duration: 2000}}/></div>
      <RouterSetup />
    </div>
  );
}

export default App;
