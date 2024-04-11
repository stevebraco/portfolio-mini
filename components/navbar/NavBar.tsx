import Link from '@/node_modules/next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='h-16 mb-5'>
      <nav className='flex justify-between items-center h-full'>
        <div className='flex space-x-2'>
        <Link className='text-xs font-bold' href='/'>Home</Link>
        <Link className='text-xs font-bold' href='/cv'>CV</Link>
        </div>
        <div className='font-bold text-xs'>steve.braco@gmail.com</div>
      </nav>
    </header>
  )
}

export default NavBar
