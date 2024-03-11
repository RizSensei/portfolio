"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
        <MotionLink href='/'
        className='w-16 h-16 bg-dark text-light text-2xl font-bold flex items-center justify-center rounded-full'
        whileHover={{
          scale:1.5
        }}
        >RM</MotionLink>
    </div>
  )
}

export default Logo