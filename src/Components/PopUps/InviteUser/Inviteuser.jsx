import React from 'react'
import Labelinputtext from '../../ui/input/Labelinputtext/Labelinputtext'
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton'

import { HiOutlineUserAdd } from "react-icons/hi";


export default function Inviteuser() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="font-bold text-xl mb-2">Invite User</h2>
        <p className="text-gray-600">This is a dialogue for inviting user</p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <Labelinputtext
            type="email"
            name="email"
            placeholder="abc@xyz.com"
          />
        </div>

        <div>
          <Labelinputtext
            type="text"
            name="role"
            placeholder="end user"
          />
        </div>

        <div>
          <Labelinputtext
            type="text"
            name="zone"
            placeholder="mangalore"
          />
        </div>
      </div>

      < Submitbutton title={<div className='flex items-center'>
        <HiOutlineUserAdd className="w-5 h-5" />
        <span className='ml-2'>Invite User</span></div>} />

    </div>
  );
}
