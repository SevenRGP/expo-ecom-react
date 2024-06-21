import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";

const Card = ({
  title = '',
  price = 0,
  image,
  id
}) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image, quantity: 1 }));
    toast.success('Added to cart!');
  }

  return (
    <>
      <div className='min-w-[230px] p-3 rounded-md shadow hover:shadow-xl transition'>
        <Link to={`/product/${id}`}>
          <div className='rounded w-full h-[140px] flex justify-center'>
            <img src={image} alt={title}
              className='max-h-full'
            />
          </div>
        </Link>
        <Link to={`/product/${id}`}>
          <h3 className='mt-2 text-[0.9rem] text-ellipsis whitespace-nowrap overflow-hidden'>{!title ? 'Title' : title}</h3>
        </Link>
        <div className='flex items-center justify-between mt-1'>
          <p className='text-lg font-medium'>${price}</p>
          <button
            className='px-2 py-1 rounded bg-black text-white text-[0.9rem]'
            onClick={handleAddToCart}
          >
            <MdAddShoppingCart size={20} />
          </button>
        </div>
      </div >
    </>
  )
}

export default Card;