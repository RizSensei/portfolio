import React from 'react'

const Button = ({ text, icon, onClick }) => {
  return (
    <button 
    type='button' 
    className='text-light bg-darkPurple flex justify-center items-center gap-1 px-4 py-1.5 rounded-md text-base'
    onClick={onClick}>
        {text}<iconify-icon icon={icon} height="24px" width="24px"></iconify-icon>
    </button>
  )
}

export default Button