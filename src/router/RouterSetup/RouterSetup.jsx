import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../Components/Layout/MainLayout/Mainlayout';

import LoginPage from '../../Pages/Public/LoginPage/LoginPage';
import Forgotpwd from '../../Pages/Public/ForgotPwd/Forgotpwd';
import Resetpwd from '../../Pages/Public/ResetPwd/Resetpwd';

import Dashboard from '../../Pages/EndUser/Dashboard/Dashboard';
import Billpayment from '../../Pages/EndUser/BillPayment/Billpayment';
import Notification from '../../Pages/EndUser/Notification/Notification';
import Profilesettings from '../../Pages/EndUser/ProfileSettings/Profilesettings';

import Dashboardz from '../../Pages/ZoneUser/Dashboard/Dashboard';
import Meterdata from '../../Pages/EndUser/MeterData/Meterdata';
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
import NotFound404 from '../../utils/NotFound404/NotFound404';

export default function RouterSetup() {
    return (
        <div>
            <BrowserRouter>
                {/* <AuthProvider > */}

                <Routes>
                    <Route element={<MainLayout />}>
                        {/* public routes */}
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/forgotpwd" element={<Forgotpwd />} />
                        <Route path="/resetpwd" element={<Resetpwd />} />
                        {/* end user routes  */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/meterdata" element={<Meterdata />} />
                        <Route path="/billpayment" element={<Billpayment />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/profile" element={<Profilesettings />} />
                        {/* zone user routes  */}
                        <Route path="/dashboardz" element={<Dashboardz />} />
                        <Route path="/metermanagement" element={<Metermanagement />} />
                        <Route path="/usermanagement" element={<Usermanagement />} />
                        <Route path="/reportanalytics" element={<Reportanalytics />} />
                        <Route path="/settingnotification" element={<Settingnotification />} />
                        {/* enterprise user routes  */}
                        <Route path="/dashboardE" element={<DashboardE />} />
                        <Route path="/zonemanagement" element={<Zonemanagement />} />
                        <Route path="/metermanagementE" element={<MetermanagementE />} />
                        <Route path="/userrolemanagement" element={<Userrolemanagement />} />
                        <Route path="/auditlogs" element={<Auditlogs />} />
                        <Route path="/settingconfiguration" element={<Settingconfiguration />} />

                        <Route path="*" element={<NotFound404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
