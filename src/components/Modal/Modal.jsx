import React from 'react'
import { Form } from '../Form/Form'

import { Close } from '@mui/icons-material';

import './Modal.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actionModalAddItem } from '../../store/slices/modals/modals';

export const Modal = () => {

  const open = useSelector(state => state.modals.addItemModal)

  console.log(open, 'modal')
  const dispatch = useDispatch()
  if (!open) {
    return null
  }
  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal__header'><h3 className='modal__title'>Want to add a new product?</h3><Close onClick={() => dispatch(actionModalAddItem())} /></div>
        <Form />
      </div>
    </div>
  )
}
