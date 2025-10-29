import React, { useState } from 'react';
import Inputtext from '../../../Components/ui/Input/Inputtext/Inputtext';
import Submitbutton from '../../../Components/ui/Button/SubmitButton/Submitbutton';

export default function Resetpwd() {
  const [formData, setFormData] = useState({
    email: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password submitted with data:", formData);
  };

  return (
    <div className='flex-column justify-self-center py-8 w-2/4'>
        <p className='justify-self-center text-2xl'>Reset password</p>
        <form onSubmit={handleSubmit} className='flex-column'>
            <Inputtext
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChangeFunc={handleChange}
            />
            <Inputtext
              placeholder="Enter your new password"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChangeFunc={handleChange}
            />
            <Submitbutton title="Update password"/>
        </form>
    </div>
  );
}
