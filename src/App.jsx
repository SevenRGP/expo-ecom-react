import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Cart, SingleProduct, Login, Signup } from './pages';
import { Header, Footer } from './components';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <>
      <Header />
      <div style={{
        minHeight: 'calc(100vh - 96px)'
      }}>

        {/* Extras */}
        <Toaster toastOptions={{ duration: 1500 }} />
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:prodID' element={<SingleProduct />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;