import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import Labelinputtext from '../../ui/input/Labelinputtext/Labelinputtext';
import Submitbutton from '../../ui/Button/SubmitButton/Submitbutton';

export default function Securitytab() {
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSecurityData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    console.log('Security settings updated:', securityData);
    alert('Password changed successfully!');
    setSecurityData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='m-5 w-2/3 p-4 justify-self-center'>
      <div className='w-fit justify-self-center p-5 bg-zinc-800 rounded-full'>
        <FaRegUser color='white' size='5rem'/>
      </div>
      <form className='p-4' onSubmit={handleSubmit}>
        <Labelinputtext placeholder="Current Password" type="password" name="currentPassword" value={securityData.currentPassword}  onChangeFunc={handleChange} />
        <Labelinputtext placeholder="New Password" type="password" name="newPassword" value={securityData.newPassword} onChangeFunc={handleChange} />
        <Labelinputtext placeholder="Confirm Password" type="password" name="confirmPassword" value={securityData.confirmPassword} onChangeFunc={handleChange} />
        <Submitbutton title="Save and continue"/>
      </form>
    </div>
  );
}
