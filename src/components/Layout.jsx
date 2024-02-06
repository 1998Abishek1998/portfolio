import React, { Suspense } from 'react'
import StarsCanvas from './canvas/StarCanvas'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='relative z-0'>
      <Suspense fallback={<>...</>}>
        {children}
        <StarsCanvas />
        <Footer />
      </Suspense>
    </div>
  )
}

export default Layout
