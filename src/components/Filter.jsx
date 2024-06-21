import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/slices/productSlice';

const Filter = ({ setToggleFilter }) => {

  const dispatch = useDispatch();

  const categories = [
    {
      id: 1,
      name: "tv"
    },
    {
      id: 2,
      name: "audio"
    },
    {
      id: 3,
      name: "laptop"
    },
    {
      id: 4,
      name: "mobile"
    },
    {
      id: 5,
      name: "gaming"
    },
    {
      id: 6,
      name: "appliances"
    },
  ]
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleApplyFilter = () => {
    setToggleFilter(false);
    dispatch(filterByCategory(selectedCategory));
  }

  return (
    <>
      <div
        className='absolute h-screen w-full top-0 left-0 flex items-center justify-center'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className='w-[90%] md:w-[75%] h-[500px] bg-white rounded'>
          <div className='flex' style={{ height: 'calc(100% - 48px)' }}>
            <div className='w-max sm:w-[420px]'>
              <li className='list-none py-4 px-2 bg-black/30 cursor-pointer'>Categories</li>
            </div>
            <div className='p-2 w-full sm:w-full'>
              {categories.map(category => (
                <div key={category.id} className='flex gap-3 mb-1'>
                  <input id={category.id}
                    type='radio'
                    name='categories'
                    onClick={() => setSelectedCategory(category.name)}
                  />
                  <label htmlFor={category.id}>
                    <li
                      className='list-none cursor-pointer'
                      onClick={() => setSelectedCategory(category.name)}
                    >{category.name.toUpperCase()}</li>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full px-3 flex justify-between'>
            <button
              className='px-5 py-2 rounded-md bg-black text-white'
              onClick={() => setToggleFilter(false)}
            >Cancel</button>
            <button
              className='px-5 py-2 rounded-md bg-black text-white'
              onClick={handleApplyFilter}
            >Apply</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter;