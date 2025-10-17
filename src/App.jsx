import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLayout from './Components/Layout/MainLayout/Mainlayout';
import LoginPage from './Pages/LoginPage/LoginPage';
import Forgotpwd from './Pages/ForgotPwd/Forgotpwd';
import Resetpwd from './Pages/ResetPwd/Resetpwd';
import Dashboard from './Pages/Dashboard/Dashboard';
import Notification from './Pages/Notification/Notification';
import Profilesettings from './Pages/ProfileSettings/Profilesettings';
import Meterdata from './Pages/MeterData/Meterdata';
import Metermanagement from './Pages/MeterManagement/Metermanagement';
import Usermanagement from './Pages/UserManagement/Usermanagement';
import Reportanalytics from './Pages/ReportAnalytics/Reportanalytics';
import Settingnotification from './Pages/SettingNotification/Settingnotification';
import './App.css';

function App() {
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
      <BrowserRouter>
        <Routes>
          {/* All routes are now nested under the MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgotpwd" element={<Forgotpwd />} />
            <Route path="/resetpwd" element={<Resetpwd />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profilesettings />} />
            <Route path="/meterdata" element={<Meterdata />} />
            <Route path="/metermanagement" element={<Metermanagement />} />
            <Route path="/usermanagement" element={<Usermanagement />} />
            <Route path="/reportanalytics" element={<Reportanalytics />} />
            <Route path="/settingnotification" element={<Settingnotification />} />
            <Route path="*" element={"Page not found"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './Components/Layout/Header/Header';
// import Sidebar from './Components/Layout/Sidebar/Sidebar';
// import LoginPage from './Pages/LoginPage/LoginPage';
// import Forgotpwd from './Pages/ForgotPwd/Forgotpwd';
// import Resetpwd from './Pages/ResetPwd/Resetpwd';
// import Dashboard from './Pages/Dashboard/Dashboard';
// import Notification from './Pages/Notification/Notification';
// import Profilesettings from './Pages/ProfileSettings/Profilesettings';
// import Meterdata from './Pages/MeterData/Meterdata';
// import './App.css';
// import Metermanagement from './Pages/MeterManagement/Metermanagement';
// import Usermanagement from './Pages/UserManagement/Usermanagement';
// import Reportanalytics from './Pages/ReportAnalytics/Reportanalytics';
// import Settingnotification from './Pages/SettingNotification/Settingnotification';

// function App() {
//   return (
//     <div className='flex flex-col min-h-screen'>
//       <BrowserRouter>
//         <div>
//           {/* <Routes>
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/forgotpwd" element={<Forgotpwd />} />
//               <Route path="/resetpwd" element={<Resetpwd />} />
//           </Routes> */}
//           <Header />
//         </div>
//         <div className='flex flex-grow'>
//           <div className='w-1/5'>
//             <Sidebar />
//           </div>
//           <div className='m-5 p-6 w-4/5 overflow-auto'>
//             <Routes>
//               <Route path="/login" element={<LoginPage />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/notification" element={<Notification />} />
//               <Route path="/profile" element={<Profilesettings />} />
//               <Route path="/meterdata" element={<Meterdata />} />
//               <Route path="/metermanagement" element={<Metermanagement />}/>
//               <Route path="/usermanagement" element={<Usermanagement/>}/>
//               <Route path="/reportanalytics" element={<Reportanalytics />}/>
//               <Route path="/settingnotification" element={<Settingnotification/>}/>
//               <Route path="*" element={"Page not found"} /> 
//             </Routes>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


