import React from 'react'

import './DropMenu.scss'

export const DropMenu = () => {
  return (
    <div className='dropmenu'>
      <div className='dropmenu__option'>
        <p className='dropmenu__text'>Sell</p>
      </div>
      <div className='dropmenu__option'>
        <p className='dropmenu__text'>Edit</p>
      </div>
      <div className='dropmenu__option'>
        <p className='dropmenu__text'>Delete</p>
      </div>
    </div>
  )
}
