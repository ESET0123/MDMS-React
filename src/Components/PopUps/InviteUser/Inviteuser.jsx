import React from 'react'
import Labelinputtext from '../../ui/input/Labelinputtext/Labelinputtext'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'

import { HiOutlineUserAdd } from "react-icons/hi";


export default function Inviteuser() {
  return (
    <div className='justify-center w-fit p-8 shadow-md'>
      <div>
        <h2 className='font-bold text-xl'> Invite User </h2>
        <p>This is a dialogue for inviting user</p>
      </div>
      <div>
        <Labelinputtext name="email" label='email' value="" placeholder="abc@xyz.com"/>
        <Labelinputtext name="role" label="role" value="" placeholder="end user"/>
        <Labelinputtext name="zone" label="zone" value="" placeholder="mangalore"/>
      </div>
      <Submitbutton title="Invite User" iconname={<HiOutlineUserAdd />} />
    </div>
  )
}
