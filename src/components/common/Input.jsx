import React from 'react';

const Input = ({
  label,
  type = 'text',
  className = '',
  placeholder = 'Text...',
  ...props
}) => {
  return (
    <>
      <div>
        {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
        <input type="text" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`} placeholder={placeholder} {...props} />
      </div>
    </>
  )
}

export default Input;