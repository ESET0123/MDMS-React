import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8000/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users = await response.json();

      const foundUser = users.find(u => u.email === email);

      if (!foundUser) {
        throw new Error('User not found. Please check your email.');
      }

      if (foundUser.password !== password) {
        throw new Error('Invalid password. Please try again.');
      }

      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role
      };

      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));

      toast.success(`Welcome back, ${userData.name}!`);

      return { success: true, user: userData };
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'An unexpected error occurred during login.');
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    toast.success('Signed out successfully');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'Admin',
    isManager: user?.role === 'Manager',
    isUser: user?.role === 'User'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
