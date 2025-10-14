import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Layout/Header/Header';
import Sidebar from './Components/Layout/Sidebar/Sidebar';
import LoginPage from './Pages/LoginPage/LoginPage';
import Forgotpwd from './Pages/ForgotPwd/Forgotpwd';
import Resetpwd from './Pages/ResetPwd/Resetpwd';
import Dashboard from './Pages/Dashboard/Dashboard';
import Notification from './Pages/Notification/Notification';
import Profilesettings from './Pages/ProfileSettings/Profilesettings';
import Meterdata from './Pages/MeterData/Meterdata';
import './App.css';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div className='flex flex-grow'>
          <div className='w-1/5'>
            <Sidebar />
          </div>
          <div className='m-5 p-6 w-4/5 overflow-auto'>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotpwd" element={<Forgotpwd />} />
              <Route path="/resetpwd" element={<Resetpwd />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profilesettings />} />
              <Route path="/meterdata" element={<Meterdata />} />
              <Route path="*" element={"Page not found"} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
