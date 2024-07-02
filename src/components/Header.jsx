import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import Logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';
import appwriteAuth from '../utils/appwrite/appwriteAuth';

const Header = () => {

  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const { isAuthenticated } = useSelector(state => state.auth);

  const handleLogout = async () => {
    try {
      await appwriteAuth.logout();
      dispatch(logout());
      toast.success('Logged out');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <header className='w-full flex items-center justify-center px-3'>
        <nav className='w-full max-w-[1200px] flex items-center justify-between py-3'>
          <Link to='/'>
            <img
              src={Logo} alt="Amoir Logo"
              className='h-5'
            />
          </Link>

          <div className='flex gap-2'>
            {(isAuthenticated !== true) ? (
              <Link to='/auth/login'>
                <button className='underline'>Login</button>
              </Link>
            ) : (
              <button className='underline' onClick={handleLogout}>Logout</button>
            )}
            <Link to='/cart'>
              <button className='w-20 bg-black text-white py-1 rounded text-[0.9rem]'>Cart ({cartItems.length})</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;