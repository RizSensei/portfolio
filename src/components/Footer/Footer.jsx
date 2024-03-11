import React from 'react'

const Footer = () => {
  return (
    <div className="w-full px-5 p-10 border-t-2 border-solid border-dark">
        <div className="flex justify-between text-lg font-medium">
            <h1>{new Date().getFullYear()} &copy; All Rights Reserved.</h1>
            <h1 className='flex justify-center items-center'>Made with <iconify-icon icon="ant-design:heart-filled"></iconify-icon> by <span className='underline'> Next14</span></h1>
            <h1>I'm secretly a <span className='text-red-500'>SpiderMan</span></h1>
        </div>
    </div>
  )
}

export default Footer