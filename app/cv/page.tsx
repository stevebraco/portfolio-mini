import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='p-2'>
      <Image src='/assets/cv.jpg' width={500} height={500} alt='cv' style={{objectFit: 'contain', width: '100%'}} />
    </div>
  )
}

export default Page