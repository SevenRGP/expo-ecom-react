import React from 'react';

const GridLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        }}
        className='w-full grid gap-3 p-3'
      >
        {children}
      </div>
    </>
  )
}

export default GridLayout;