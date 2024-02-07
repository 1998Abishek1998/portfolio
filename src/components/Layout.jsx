import React from 'react'
import StarsCanvas from './canvas/StarCanvas'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='relative z-0'>
      <Navbar />
      {children}
      <StarsCanvas />
      <Footer />
    </div>
  )
}

export default Layout
