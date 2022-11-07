import React from 'react'

import './Metrics.scss'

export const Metrics = ({ children }) => {
  return (
    <div className='metrics'>

      <div className='metrics__container'>
        {children}
      </div>
    </div>
  )
}
