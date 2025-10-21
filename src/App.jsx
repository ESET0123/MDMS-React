// import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// // import { initDB } from './repo/indexedDB';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import MainLayout from './Components/Layout/MainLayout/Mainlayout';
// import LoginPage from './Pages/Public/LoginPage/LoginPage';
// import Forgotpwd from './Pages/Public/ForgotPwd/Forgotpwd';
// import Resetpwd from './Pages/Public/ResetPwd/Resetpwd';
// import Dashboard from './Pages/EndUser/Dashboard/Dashboard';
// import Dashboardz from './Pages/ZoneUser/Dashboard/Dashboard';
// import Notification from './Pages/EndUser/Notification/Notification';
// import Profilesettings from './Pages/EndUser/ProfileSettings/Profilesettings';
// import Meterdata from './Pages/EndUser/MeterData/Meterdata';
// import Metermanagement from './Pages/ZoneUser/MeterManagement/Metermanagement';
// import Usermanagement from './Pages/ZoneUser/UserManagement/Usermanagement';
// import Reportanalytics from './Pages/ZoneUser/ReportAnalytics/Reportanalytics';
// import Settingnotification from './Pages/ZoneUser/SettingNotification/Settingnotification';
// import Billpayment from './Pages/EndUser/BillPayment/Billpayment';
// import NotFound404 from './utils/NotFound404/NotFound404';
// import Profiletab from './Components/tab/ProfileTab/Profiletab';
// import Securitytab from './Components/tab/SecurityTab/Securitytab';
// import Notificationtab from './Components/tab/NotificationTab/Notificationtab';

// function App() {
//   const { t, i18n } = useTranslation();
//   const isDarkMode = useSelector((state) => state.theme.isDarkMode);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (isDarkMode) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   return (
//     <div className='bg-white dark:bg-zinc-600 transition-colors duration-300'>
//       <BrowserRouter>
//         <Routes>
//           {/* All routes are now nested under the MainLayout */}
//           <Route  element={<MainLayout />}>
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/forgotpwd" element={<Forgotpwd />} />
//             <Route path="/resetpwd" element={<Resetpwd />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/billpayment" element={<Billpayment />} />
//             <Route path="/notification" element={<Notification />} />
//             <Route path="/profile" element={<Profilesettings />}>
//           {/* Nested routes for the tabs */}
//           <Route path="profile" element={<Profiletab />} />
//             <Route index element={<Profiletab />} />
//             <Route path="security" element={<Securitytab />} />
//             <Route path="notification" element={<Notificationtab />} />
//             {/* Default tab, shown when visiting /settings */}
//           </Route>
//             <Route path="/dashboardz" element={<Dashboardz />} />
//             <Route path="/meterdata" element={<Meterdata />} />
//             <Route path="/metermanagement" element={<Metermanagement />} />
//             <Route path="/usermanagement" element={<Usermanagement />} />
//             <Route path="/reportanalytics" element={<Reportanalytics />} />
//             <Route path="/settingnotification" element={<Settingnotification />} />
//             <Route path="*" element={<NotFound404/> } />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RouterSetup from './router/RouterSetup/routersetup';

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
      <RouterSetup/>
    </div>
  );
}

export default App;