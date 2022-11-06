import React from 'react'
import { Form } from '../Form/Form'

import './Modal.scss'

export const Modal = ({ open }) => {
  if (!open) {
    return null
  }
  return (
    <div className='overlay'>
      <div className='modal'>
        <Form />
      </div>
    </div>
  )
}
