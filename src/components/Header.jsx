import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Assets
import Logo from '../assets/Logo.svg';

const Header = () => {

  const { cartItems } = useSelector(state => state.cart);

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
            <Link to='/login'>
              <button className='underline'>Login</button>
            </Link>
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