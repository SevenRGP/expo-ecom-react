import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getAllProducts } from '../redux/slices/productSlice';
import { GridLayout, Card, Filter, Loading } from '../components';

const Home = () => {
  const dispatch = useDispatch();
  const [toggleFilter, setToggleFilter] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const { products, loading, error, isFiltered } = useSelector(state => state.product);

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong...');
    }
  }, [error]);

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full max-w-[1200px] mx-2'>
        <div className='flex gap-2'>
          {!loading && products.length > 0 && (
            <button
              className='w-[150px] py-1 rounded-full bg-black/20'
              onClick={() => setToggleFilter(true)}
            >
              Filter
            </button>
          )}
          {isFiltered && (
            <button
              className='w-[150px] py-1 rounded-full bg-black/20'
              onClick={() => dispatch(getAllProducts())}
            >
              See All
            </button>
          )}
        </div>
        {toggleFilter && <Filter setToggleFilter={setToggleFilter} />}
        <GridLayout>
          {!loading && products.length > 0 && products.map(prod => (
            <Card
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.image}
            />
          ))}
        </GridLayout>
        {loading && !error && <Loading />}
        {!loading && error && (
          <h2 className='font-medium text-xl text-gray-400'>
            Something went wrong...
          </h2>
        )}
      </div>
    </div>
  );
};

export default Home;