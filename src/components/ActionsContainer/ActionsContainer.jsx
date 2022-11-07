import React from 'react'

import './ActionsContainer.scss'
export const ActionsContainer = ({ children }) => {
  return (
    <div className='actions__container'>
      {children}
    </div>
  )
}
