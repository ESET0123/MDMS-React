
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import RouterSetup from './router/RouterSetup/RouterSetup';

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
    <div className='bg-white dark:bg-zinc-600 transition-colors duration-300'>
      <RouterSetup />
    </div>
  );
}

export default App;