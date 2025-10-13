import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Pages/LoginPage/LoginPage'
import Header from './Components/Layout/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Forgotpwd from './Pages/ForgotPwd/Forgotpwd'
import Resetpwd from './Pages/ResetPwd/Resetpwd'
import Sidebar from './Components/Layout/Sidebar/Sidebar'
import Dashboard from './Pages/Dashboard/Dashboard'
import Notification from './Pages/Notification/Notification'
import Profilesettings from './Pages/ProfileSettings/Profilesettings'
import Meterdata from './Pages/MeterData/Meterdata'

function App() {

  return (
    <div className='h-screen '>
      <BrowserRouter>
      <div className='h-1/12 '>
        <Header/>
      </div>
      <div className='h-11/12'>
        <div className='flex h-full w-screen'> 
          <div className='flex w-1/5'>
            <Sidebar/>
          </div>
          <div className=' m-5 w-4/5'>
            <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/forgotpwd" element={<Forgotpwd/>}/>
              <Route path="/resetpwd" element={<Resetpwd />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/notification" element={<Notification />}/>
              <Route path="/profile" element={<Profilesettings />}/>
              <Route path="/meterdata" element={<Meterdata />}/>
              <Route path="*" element={"Page not found"}/>
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>

    </div>
  )
}

export default App
