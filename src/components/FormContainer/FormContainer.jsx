import React from 'react'

import './FormContainer.scss'
export const FormContainer = ({ children }) => {
  return (
    <div className='form__container'>
      {children}
    </div>
  )
}
