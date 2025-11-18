import React, { useState } from 'react';
import Inputtext from '../../../Components/ui/Input/Inputtext/Inputtext';
import Submitbutton from '../../../Components/ui/Button/SubmitButton/Submitbutton';
import Inputcheck from '../../../Components/ui/Input/Inputcheck/Inputcheck';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { getDefaultRoute } from '../../../config/roleConfig';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const fillCredentials = (email, password) => {
    setFormData({
      email,
      password
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);

      if (result.success) {
        toast.success('Signed in successfully');
        const defaultRoute = getDefaultRoute(result.user.role);
        navigate(defaultRoute);
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
        toast.error("Please check your credentials.");
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex-column justify-self-center py-8 w-2/4'>
      <p className='justify-self-center text-2xl text-gray-900 dark:text-white'>Login Form</p>
      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4'>
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className='flex-column'>
        <Inputtext
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChangeFunc={handleChange}
          required
        />
        <Inputtext
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChangeFunc={handleChange}
          required
        />
        <Link to='/forgotpwd' className='flex justify-self-end text-blue-600 font-bold'>
          forgot password
        </Link>
        <Link to='/resetpwd' className='flex justify-self-end text-blue-600 font-bold'>
          reset password
        </Link>
        <Inputcheck
          title="Remember me"
          name="rememberMe"
          checked={rememberMe}
          onChange={handleCheckboxChange}
        />
        <Submitbutton title={loading ? "Logging in..." : "Login"} disabled={loading} />
      </form>
      <div className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
        <p className='font-bold mb-2'>Click any button below to select test accounts:</p>
        <div className='flex flex-col gap-2'>
          <button
            type="button"
            onClick={() => fillCredentials('john.doe@example.com', 'password')}
            className='px-4 py-2  bg-orange-500 text-white rounded-2xl hover:bg-orange-400 transition-colors'
          >
            Admin: john.doe@example.com
          </button>
          <button
            type="button"
            onClick={() => fillCredentials('emily.d@example.com', 'password')}
            className='px-4 py-2 bg-gray-200 text-blue-900 rounded-2xl hover:bg-gray-400 transition-colors'
          >
            Manager: emily.d@example.com
          </button>
          <button
            type="button"
            onClick={() => fillCredentials('jane.smith@example.com', 'password')}
            className='px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-400 transition-colors'
          >
            User: jane.smith@example.com
          </button>
        </div>
      </div>
    </div>
  );
}