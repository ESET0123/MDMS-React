import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../Components/Layout/MainLayout/Mainlayout';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ROLES } from '../../config/roleConfig';

import LoginPage from '../../Pages/Public/LoginPage/LoginPage';
import Forgotpwd from '../../Pages/Public/ForgotPwd/Forgotpwd';
import Resetpwd from '../../Pages/Public/ResetPwd/Resetpwd';
import AccessDenied from '../../utils/AccessDenied/AccessDenied';
import NotFound404 from '../../utils/NotFound404/NotFound404';

import Dashboard from '../../Pages/EndUser/Dashboard/Dashboard';
import Billpayment from '../../Pages/EndUser/BillPayment/Billpayment';
import Notification from '../../Pages/EndUser/Notification/Notification';
import Profilesettings from '../../Pages/EndUser/ProfileSettings/Profilesettings';
import Meterdata from '../../Pages/EndUser/MeterData/Meterdata';

import Dashboardz from '../../Pages/ZoneUser/Dashboard/Dashboard';
import Metermanagement from '../../Pages/ZoneUser/MeterManagement/Metermanagement';
import Usermanagement from '../../Pages/ZoneUser/UserManagement/Usermanagement';
import Reportanalytics from '../../Pages/ZoneUser/ReportAnalytics/Reportanalytics';
import Settingnotification from '../../Pages/ZoneUser/SettingNotification/Settingnotification';

import DashboardE from '../../Pages/EnterpriseUser/Dashboard/Dashboard';
import Zonemanagement from '../../Pages/EnterpriseUser/ZoneManagement/Zonemanagement';
import MetermanagementE from '../../Pages/EnterpriseUser/MeterManagement/Metermanagement';
import Userrolemanagement from '../../Pages/EnterpriseUser/UserRoleManagement/Userrolemanagement';
import Auditlogs from '../../Pages/EnterpriseUser/AuditLogs/Auditlogs';
import Settingconfiguration from '../../Pages/EnterpriseUser/SettingConfiguration/Settingconfiguration';

export default function RouterSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotpwd" element={<Forgotpwd />} />
          <Route path="/resetpwd" element={<Resetpwd />} />
          <Route path="/unauthorized" element={<AccessDenied />} />

          {/* End User Routes - Role: User */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={[ROLES.USER]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/meterdata"
            element={
              <ProtectedRoute allowedRoles={[ROLES.USER]}>
                <Meterdata />
              </ProtectedRoute>
            }
          />
          <Route
            path="/billpayment"
            element={
              <ProtectedRoute allowedRoles={[ROLES.USER]}>
                <Billpayment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notification"
            element={
              <ProtectedRoute allowedRoles={[ROLES.USER, ROLES.MANAGER, ROLES.ADMIN]}>
                <Notification />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={[ROLES.USER]}>
                <Profilesettings />
              </ProtectedRoute>
            }
          />

          {/* Zone User Routes - Role: Manager */}
          <Route
            path="/dashboardz"
            element={
              <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
                <Dashboardz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/metermanagement"
            element={
              <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
                <Metermanagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/usermanagement"
            element={
              <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
                <Usermanagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reportanalytics"
            element={
              <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
                <Reportanalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settingnotification"
            element={
              <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
                <Settingnotification />
              </ProtectedRoute>
            }
          />

          {/* Enterprise User Routes - Role: Admin */}
          <Route
            path="/dashboardE"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <DashboardE />
              </ProtectedRoute>
            }
          />
          <Route
            path="/zonemanagement"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <Zonemanagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/metermanagementE"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <MetermanagementE />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userrolemanagement"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <Userrolemanagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/auditlogs"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <Auditlogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settingconfiguration"
            element={
              <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
                <Settingconfiguration />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}