import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
      <button className='px-2 py-1 border rounded-md bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button
