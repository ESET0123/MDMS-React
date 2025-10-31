export const ROLES = {
  USER: 'User',
  MANAGER: 'Manager',
  ADMIN: 'Admin'
};

export const ROLE_ROUTES = {
  [ROLES.USER]: [
    { path: '/dashboard', label: 'dashboard' },
    { path: '/meterdata', label: 'meter_data' },
    { path: '/billpayment', label: 'bill_payment' },
    { path: '/notification', label: 'alert_notification' },
    { path: '/profile', label: 'profile_settings' }
  ],
  [ROLES.MANAGER]: [
    { path: '/dashboardz', label: 'dashboard' },
    { path: '/metermanagement', label: 'meter_management' },
    { path: '/usermanagement', label: 'user_management' },
    { path: '/reportanalytics', label: 'report_analytics' },
    { path: '/settingnotification', label: 'setting_notification' }
  ],
  [ROLES.ADMIN]: [
    { path: '/dashboardE', label: 'dashboard' },
    { path: '/zonemanagement', label: 'zone_management' },
    { path: '/metermanagementE', label: 'meter_management' },
    { path: '/userrolemanagement', label: 'user_role_management' },
    { path: '/auditlogs', label: 'audit_logs' },
    { path: '/settingconfiguration', label: 'setting_configuration' }
  ]
};

export const getDefaultRoute = (role) => {
  switch (role) {
    case ROLES.ADMIN:
      return '/dashboardE';
    case ROLES.MANAGER:
      return '/dashboardz';
    case ROLES.USER:
    default:
      return '/dashboard';
  }
};