import React from 'react'
import { FaRegUser } from "react-icons/fa";
// import Labelinputtext from '../../../ui/Input/Labelinputtext/Labelinputtext';
import Inputtext from '../../ui/Input/Inputtext/Inputtext';
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton';

export default function Securitytab() {
  return (
    <div className='m-5 w-2/3 p-4 justify-self-center'>
            <div className='w-fit justify-self-center p-5 bg-zinc-800 rounded-full'>
                <FaRegUser color='white' size='5rem'/>
            </div>
            <div className='p-4 '>
                <Inputtext placeholder="current password"/>
                <Inputtext placeholder="new password"/>
                <Inputtext placeholder="confirm password"/>
                <Submitbutton title="save and continue"/>
            </div>
        </div>
  )
}
