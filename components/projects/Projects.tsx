import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'

const Projects = ({ data }: { data: any }) => {
  return (
    <div className='flex-column sm:flex-row space-y-5 gap-2 lg:items-center justify-between mt-5'>
      <div>
        <div>
          <h3 className='font-bold'>{data.name}</h3>
          <div className='flex gap-3 mt-1'>
            <Link className='text-xs_tracking-w text-gray-500 ' href={data.site}>View Site</Link>
            <Link className='text-xs_tracking-w text-gray-500' href={data.code}>Code</Link>
          </div>
        </div>
        <div className='sm:max-w-[400px] text-xs_tracking-w mt-3'>
          <p className='text-xs_tracking-w'>{data.description}</p>
        </div>
        <div className='flex flex-wrap gap-1 mt-2'>
          {data.stack.map(s => <Badge key={data.id} variant="outline">{s}</Badge>)}
        </div>
      </div>
      <div className='h-[300px]'>
        <Image src={data.img} width={300} height={300} alt={data.name} style={{ objectFit: "cover", width: '100%' }} />
      </div>
    </div>
  )
}

export default Projects