'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import defaultWallpaper from '../../assets/resources/default.jpg'
import Image from 'next/image'

const navigationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-screen absolute overflow-clip'>
      <Image className='absolute' src={defaultWallpaper} alt="Description" />
      <Navbar />
      <div className='relative'>
        {children}
      </div>
    </div>
  )
}

export default navigationLayout