import React, { useEffect } from 'react';
import { CartItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotal } from '../redux/slices/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch]);

  const { cartItems, total } = useSelector(state => state.cart);

  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

        <div className="bg-white shadow-md rounded-lg p-4">

          {(cartItems && cartItems.length > 0) && cartItems.map(item => (
            <CartItem key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          ))}

          {(cartItems.length === 0) && (
            <p className="text-center text-2xl font-medium text-gray-400">No items in cart</p>
          )}

          {(cartItems && cartItems.length > 0) && (
            <div className="flex justify-between items-center mt-4">
              <div className="text-xl font-bold">Total</div>
              <div className="text-xl font-bold">${total}</div>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default Cart;