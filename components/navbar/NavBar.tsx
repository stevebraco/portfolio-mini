import Link from '@/node_modules/next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='h-16 mb-5'>
      <nav className='flex justify-end items-center h-full'>
        <div className='font-bold text-xs'>steve.braco@gmail.com</div>
      </nav>
    </header>
  )
}

export default NavBar
