import React, { useState } from 'react';
import { Input, Button } from '../components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import login from '../redux/slices/authSlice';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 80px)' }}
      className="flex items-center justify-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome to Expo</h2>
        <form onSubmit={handleSignup}>
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
              value={password} s
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
            >
              Signup
            </Button>
            <Link to="/auth/login">
              <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Have an account?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;