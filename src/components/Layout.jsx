import React from 'react'
import StarsCanvas from './canvas/StarCanvas'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='relative z-0'>
      <Navbar />
      {children}
      <StarsCanvas />
    </div>
  )
}

export default Layout
