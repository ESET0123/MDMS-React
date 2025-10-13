import React from 'react'
import { Link } from 'react-router-dom'
import Inputtext from '../../Components/ui/Input/Inputtext/Inputtext'
import Submitbutton from '../../Components/ui/Button/SubmitButton/Submitbutton'

export default function Forgotpwd() {
  return (
    <div className='flex-column place-items-center justify-self-center py-8 w-2/4'>
        <p className='justify-self-center text-2xl'>Forgot password</p>
        <Inputtext placeholderx="email"/>
        <Link to='/login' className='text-blue-600 font-bold'>login</Link>
        <Submitbutton title="send reset link"/>
    </div>
  )
}
