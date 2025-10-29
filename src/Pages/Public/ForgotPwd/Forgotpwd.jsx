import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Inputtext from '../../../Components/ui/Input/Inputtext/Inputtext';
import Submitbutton from '../../../Components/ui/Button/SubmitButton/Submitbutton';

export default function Forgotpwd() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password request sent for:", email);
    // Add  logic to send the reset link here (API call)
  };

  return (
    <div className='flex-column place-items-center justify-self-center py-8 w-2/4'>
      <p className='justify-self-center text-2xl'>Forgot password</p>
      <form onSubmit={handleSubmit} className='flex-column w-full'>
        <Inputtext
          placeholder="email"
          type="email"
          name="email"
          value={email}
          onChangeFunc={(e) => setEmail(e.target.value)}
        />
        <Link to='/login' className='text-blue-600 font-bold'>login</Link>
        <Submitbutton title="send reset link" />
      </form>
    </div>
  );
}
