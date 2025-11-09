import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import ThemeToggleButton from '../../ui/Button/ThemeToggleButton/Themetogglebutton';
import Languagedropdown from '../../ui/Button/LanguageDropdown/Languagedropdown';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import toast from 'react-hot-toast';


export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const isLoginPage = location.pathname === '/login' || location.pathname === '/forgotpwd' || location.pathname === '/resetpwd';
  const iconColor = isDarkMode ? 'white' : 'black';

  const handleButtonClick = () => {
    // navigate('/notification');
    alert('Notification button clicked')
  };

  const onClickHandler = () =>{
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      logout()
    }
    else{
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="flex p-4 justify-between items-center bg-zinc-300 dark:bg-gray-800 transition-colors duration-300">
        <div>
          <p className="font-bold text-2xl text-zinc-900 dark:text-white">{t('MDMS')}</p>
        </div>
        <div className='flex items-center'>
          {!isLoginPage && (
            <button onClick={handleButtonClick} className='mx-2' style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              <IoMdNotificationsOutline color={iconColor} size='2rem' />
            </button>
          )}
          <div className='mx-2'>
            <ThemeToggleButton />
          </div>
          <Languagedropdown />
          {!isLoginPage && (
            <button className='rounded-full p-2 mx-2 bg-white dark:bg-slate-700' onClick={onClickHandler}>
              <CiUser color={iconColor} size='2rem' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
