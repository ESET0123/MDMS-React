import React from 'react'
import { FaRegUser } from "react-icons/fa";
// import Labelinputtext from '../../../ui/Input/Labelinputtext/Labelinputtext';
import Inputtext from '../../ui/Input/Inputtext/Inputtext';
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton';

export default function Profiletab() {
  return (
    <div className='m-5 w-2/3 p-4 justify-self-center'>
        <div className='w-fit justify-self-center p-5 bg-gray-800 rounded-full'>
            <FaRegUser color='white' size='5rem'/>
        </div>
        <div className='p-4 '>
            <Inputtext placeholder="name"/>
            <Inputtext placeholder="email"/>
            <Inputtext placeholder="mobile no."/>
            <Submitbutton title="save and continue"/>
        </div>
    </div>
  )
}
