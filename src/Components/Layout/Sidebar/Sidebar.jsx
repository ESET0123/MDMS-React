import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t, i18n } = useTranslation();

  const getNavClassNames = ({ isActive }) =>
    `flex pt-4 text-md transition-colors duration-300 ${
      isActive
        ? 'font-bold text-zinc-800 dark:text-white'
        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white'
    }`;

  return (
    <div className='flex-column h-full w-full p-2 px-6 bg-zinc-100 dark:bg-zinc-700 transition-colors duration-300'>
      <NavLink to="/dashboard" className={getNavClassNames}>{t('dashboard')}</NavLink>

      {/* End User */}
      <NavLink to="/billpayment" className={getNavClassNames}>{t('bill_payment')}</NavLink>
      <NavLink to="/meterdata" className={getNavClassNames}>{t('meter_data')}</NavLink>
      <NavLink to="/notification" className={getNavClassNames}>{t('alert_notification')}</NavLink>
      <NavLink to="/profile" className={getNavClassNames}>{t('profile_settings')}</NavLink>

      <p>-----------</p>

      {/* Zone user */}
      <NavLink to="/dashboardz" className={getNavClassNames}>{t('dashboard')}</NavLink>
      <NavLink to="/metermanagement" className={getNavClassNames}>{t('meter_management')}</NavLink>
      <NavLink to="/usermanagement" className={getNavClassNames}>{t('user_management')}</NavLink>
      <NavLink to="/reportanalytics" className={getNavClassNames}>{t('report_analytics')}</NavLink>
      <NavLink to="/settingnotification" className={getNavClassNames}>{t('setting_notification')}</NavLink>
      
        <p>-----------</p>

      {/* Enterprise user */}
      <NavLink to="/dashboardE" className={getNavClassNames}>{t('dashboard')}</NavLink>
      <NavLink to="/zonemanagement" className={getNavClassNames}>{t('zone_management')}</NavLink>
      <NavLink to="/metermanagementE" className={getNavClassNames}>{t('meter_management')}</NavLink>
      <NavLink to="/userrolemanagement" className={getNavClassNames}>{t('user_role_management')}</NavLink>
      <NavLink to="/auditlogs" className={getNavClassNames}>{t('audit_logs')}</NavLink>
      <NavLink to="/settingconfiguration" className={getNavClassNames}>{t('setting_configuration')}</NavLink>
    </div>
  );
}
