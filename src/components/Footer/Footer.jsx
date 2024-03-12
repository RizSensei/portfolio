import React from 'react'
import "../../../public/css/style.css"

const Footer = () => {
  return (
    <div className="w-full p-5">
        <div className="flex justify-center text-lg font-medium">
            {/* <h1>{new Date().getFullYear()} &copy; All Rights Reserved.</h1> */}
            {/* <h1 className='flex justify-center items-center'>Made with <iconify-icon icon="ant-design:heart-filled"></iconify-icon> by <span className='underline'> Next14</span></h1> */}
            <h1 className='tektur-regular'>I'm secretly a <span className='text-darkPurple'>SpiderMan</span></h1>
        </div>
    </div>
  )
}

export default Footer