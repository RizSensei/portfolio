import React from 'react'

const Button = ({ text, icon, onClick, background=true }) => {

  const bgColor = background ? "bg-darkPurple" : "bg-blue-700";

  return (
    <button 
    type='submit' 
    className={`${bgColor} text-light flex justify-center items-center gap-1 px-4 py-1.5 rounded-md text-base`}
    onClick={onClick}>
        {text}<iconify-icon icon={icon} height="24px" width="24px"></iconify-icon>
    </button>
  )
}

export default Button