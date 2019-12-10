import React from 'react'

export default () => {
  return (
    <div className='footer'>
      <h1>footer</h1>
      <style jsx>{`
        .footer > h1 {
          color: #f60;
          font-size: 18px;
          height: 40px;
          font-weight: 400;
          background-color: #ccc;
        }
      `}</style>
    </div>
  )
}
