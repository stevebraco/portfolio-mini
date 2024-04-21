import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Connect = () => {
  return (
    <section className="divider" >
        <div className='mt-5 flex-column lg:flex-row justify-between lg:items-center'>
        <div>
          <h2 className='font-bold'>Let's Connect</h2>
          <p className='text-xs_tracking-w mt-2'>I'm currently looking for new opportunities, my inbox is always open.</p>
          <p className='text-xs_tracking-w'>Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
        </div>
        <span className='font-bold text-xs_tracking-w'>steve.braco@gmail.com</span>
        </div>
          <div className="flex space-x-2 mt-5">
          <Link href='https://github.com/stevebraco'>
          <Image src='/assets/github.png' width={24} height={24} alt="github" />
        </Link>
        <Link href='https://www.linkedin.com/in/stevebraco/'>
          <Image src='/assets/linkedin.png' width={24} height={24} alt="github" />
        </Link>
          </div>
      </section>
  )
}

export default Connect