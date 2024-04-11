import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-md px-3 mx-auto">
      {children}
    </div>
  )
}

export default layout
