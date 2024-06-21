import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/slices/cartSlice';
import { toast } from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ id, image, title, price, quantity }) => {

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    toast.success('Product removed');
  };

  const dispatch = useDispatch();

  return (
    <>
      <div key={id} className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={image} alt={title} className="w-16 h-16 object-cover mr-4" />
          <div>
            <div className="mr-4">{title.slice(0, 60)}...</div>
            <div className="flex items-center">
              <button
                className="bg-gray-200 text-gray-700 px-2 rounded"
                onClick={() => dispatch(decrementQuantity(id))}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="bg-gray-200 text-gray-700 px-2 rounded"
                onClick={() => dispatch(incrementQuantity(id))}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-lg font-bold">${price}</div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded ml-4"
            onClick={handleRemoveFromCart}
          >
            <FaRegTrashAlt size={20} />
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItem;