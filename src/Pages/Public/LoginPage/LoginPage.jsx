import React, { useState } from 'react';
import Inputtext from '../../../Components/ui/Input/Inputtext/Inputtext';
import Submitbutton from '../../../Components/ui/Button/SubmitButton/Submitbutton';
import Inputcheck from '../../../Components/ui/Input/Inputcheck/Inputcheck';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { getDefaultRoute } from '../../../config/roleConfig';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);

      if (result.success) {
        const defaultRoute = getDefaultRoute(result.user.role);
        navigate(defaultRoute);
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error('Login error:', err);
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
      <div className='mt-4 text-sm text-gray-600 dark:text-gray-300'>
        <p>Test Accounts:</p>
        <p>Admin: john.doe@example.com</p>
        <p>Manager: emily.d@example.com</p>
        <p>User: jane.smith@example.com</p>
      </div>
    </div>
  );
}