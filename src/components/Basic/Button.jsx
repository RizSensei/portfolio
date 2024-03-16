import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button 
    type='button' 
    className='text-light bg-darkPurple px-4 py-1.5 rounded-md text-sm'
    onClick={onClick}>
        {text}
    </button>
  )
}

export default Button