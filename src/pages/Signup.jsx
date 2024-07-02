import React, { useState } from 'react';
import { Input, Button } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import login from '../redux/slices/authSlice';
import appwriteAuth from '../utils/appwrite/appwriteAuth';
import toast from 'react-hot-toast';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const user = await appwriteAuth.createUser({ email, password, name });
      dispatch(login(user));
      toast.success('Signup successful');
      navigate('/');
    } catch (error) {
      if (error.message !== "Cannot read properties of undefined (reading 'type')") {
        toast.error(error.message);
      } else {
        toast.success('Signup successful');
        navigate('/');
      }
    }
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
              id="name"
              type="name"
              label={"Name"}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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