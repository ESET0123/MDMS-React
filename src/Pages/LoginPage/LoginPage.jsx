import React from 'react'
import Inputtext from '../../Components/ui/Input/Inputtext/Inputtext'
import Inputcheck from '../../Components/ui/Input/InputCheck/Inputcheck'
import Submitbutton from '../../Components/ui/Button/SubmitButton/Submitbutton'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='flex-column place-items-center justify-self-center py-8 w-2/4'>
        <p className='justify-self-center text-2xl'>Login Form</p>
        <Inputtext placeholder="email"/>
        <Inputtext placeholder="password"/>
        <Link to='/forgotpwd' className='flex justify-self-end text-blue-600 font-bold'>forgot password</Link>
        <Inputcheck title="Remember me"/>
        <Submitbutton title="Login"/>
    </div>
  )
}
