import NavBar from '@/components/navbar/NavBar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-md px-3 mx-auto">
      <NavBar />
      {children}
    </div>
  )
}

export default layout
