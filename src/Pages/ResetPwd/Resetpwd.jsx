import React from 'react'
import Inputtext from '../../Components/ui/Input/Inputtext/Inputtext'
import Submitbutton from '../../Components/ui/Button/SubmitButton/Submitbutton'

export default function Resetpwd() {
  return (
    <div className='flex-column place-items-center justify-self-center py-8 w-2/4'>
        <p className='justify-self-center text-2xl'>Reset password</p>
        <Inputtext placeholder="abc@gmail.com"/>
        <Inputtext placeholder="Enter your password"/>
        <Submitbutton title="update password"/>
    </div>
  )
}
