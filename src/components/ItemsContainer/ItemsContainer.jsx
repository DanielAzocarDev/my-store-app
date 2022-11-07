import React from 'react'

import './ItemsContainer.scss'
export const ItemsContainer = ({ children }) => {
  return (
    <div className='items__container'>{children}</div>
  )
}
