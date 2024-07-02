import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../components';
import { toast } from 'react-hot-toast';

const SingleProduct = () => {
  const { prodID } = useParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getSingleProduct(prodID));
  }, [dispatch, prodID]);

  const handleAddCart = () => {
    dispatch(addToCart(products));
    toast.success('Added to cart');
  }

  return (
    <>
      <div className='w-full flex items-center justify-center'>
        {loading && !error && <Loading />}
        {!loading && !error && products && (
          <div className="w-full max-w-[1200px] flex flex-col items-center md:flex-row">
            <div className="w-[300px] sm:w-[420px] md:w-1/2 top-1">
              <img
                src={products.image}
                alt={products.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full h-auto md:w-1/2 pl-6">
              <h1 className="text-3xl font-bold mb-4">{products.title}</h1>
              <p className="text-2xl text-red-600 mb-4 font-medium">${products.price}</p>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                onClick={handleAddCart}
              >
                Add to Cart
              </button>
              <p className="text-gray-700 my-4">{products.description}</p>
            </div>
          </div>
        )}
      </div>
      {!loading && error && (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-medium text-gray-400">Something went wrong...</h2>
        </div>
      )}
    </>
  )
}

export default SingleProduct;