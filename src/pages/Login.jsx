import React, { useState } from 'react';
import { Input, Button } from '../components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import login from '../redux/slices/authSlice';
import appwriteAuth from '../utils/appwrite/appwriteAuth';
import toast from 'react-hot-toast';

const Login = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await appwriteAuth.login({ email, password });
      if (user) {
        dispatch(login(user));
        toast.success('Login successful');
      };
    } catch (error) {
      toast.error(error.message);
    };
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className="flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              label={"Email"}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
            >
              Sign In
            </Button>
            <Link to="/auth/register">
              <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                New to Expo?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;