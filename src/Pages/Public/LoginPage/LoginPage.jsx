import React, { useState } from 'react';
import Inputtext from '../../../Components/ui/Input/Inputtext/Inputtext';
import Inputcheck from '../../../components/ui/Input/InputCheck/Inputcheck';
import Submitbutton from '../../../Components/ui/Button/SubmitButton/Submitbutton';
import { Link, useNavigate } from 'react-router-dom'; 

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted with data:", { ...formData, rememberMe });

    const loginSuccess = true;  //todo

    if (loginSuccess) {
      navigate('/dashboard');
    } else {
      console.log("Login failed.");
    }
  };

  return (
    <div className='flex-column justify-self-center py-8 w-2/4'>
        <p className='justify-self-center text-2xl'>Login Form</p>
        <form onSubmit={handleSubmit} className='flex-column'>
            <Inputtext name="email" type="email" placeholder="Email" value={formData.email} onChangeFunc={handleChange} />
            {/* <Labelinputtext name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} /> */}
            <Inputtext name="password" type="password" placeholder="Password" value={formData.password} onChangeFunc={handleChange} />
            <Link to='/forgotpwd' className='flex justify-self-end text-blue-600 font-bold'>forgot password</Link>
            <Link to='/resetpwd' className='flex justify-self-end text-blue-600 font-bold'>reset password</Link>
            <Inputcheck title="Remember me" name="rememberMe" checked={rememberMe} onChange={handleCheckboxChange} />
            <Submitbutton title="Login"/>
        </form>
    </div>
  );
}
