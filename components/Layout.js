import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

export default ({ children }) => {
  return (
    <>
      <div className='container'>
        <header>
          <NavBar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </div>
      <style jsx>{`
        .container {
          width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
