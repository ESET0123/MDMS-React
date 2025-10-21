import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
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
import NotFound404 from '../../utils/NotFound404/NotFound404';
// import EndUserRouter from '../EndUserRouter/EndUserRouter';
// import ZoneUserRouter from '../ZoneUserRouter/ZoneUserRouter';
import MainLayout from '../../Components/Layout/MainLayout/Mainlayout';

export default function RouterSetup() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgotpwd" element={<Forgotpwd />} />
                    <Route path="/resetpwd" element={<Resetpwd />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/meterdata" element={<Meterdata />} />
                    <Route path="/billpayment" element={<Billpayment />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/profile" element={<Profilesettings />}/>
                
                    <Route path="/dashboardz" element={<Dashboardz />} />
                    <Route path="/metermanagement" element={<Metermanagement />} />
                    <Route path="/usermanagement" element={<Usermanagement />} />
                    <Route path="/reportanalytics" element={<Reportanalytics />} />
                    <Route path="/settingnotification" element={<Settingnotification />} />

                    <Route path="*" element={<NotFound404/> } />
                </Route>
            </Routes>
            {/*<Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/billpayment" element={<Billpayment />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/profile" element={<Profilesettings />}/>
                </Route> 
                 <Route element={<MainLayout />}>
                    <Route path="/dashboardz" element={<Dashboardz />} />
                    <Route path="/meterdata" element={<Meterdata />} />
                    <Route path="/metermanagement" element={<Metermanagement />} />
                    <Route path="/usermanagement" element={<Usermanagement />} />
                    <Route path="/reportanalytics" element={<Reportanalytics />} />
                    <Route path="/settingnotification" element={<Settingnotification />} />
                </Route>
                <Route  element={<MainLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgotpwd" element={<Forgotpwd />} />
                    <Route path="/resetpwd" element={<Resetpwd />} />
                </Route>
                <Route path="*" element={<NotFound404/> } />
            </Routes>  */}
        </BrowserRouter>
    </div>
  )
}
