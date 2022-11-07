import React from 'react'
import { useDispatch } from 'react-redux'
import { actionModalAddItem } from '../../store/slices/modals/modals'
import { Modal } from '../Modal/Modal'

import './Action.scss'

export const Action = () => {

  const dispatch = useDispatch()

  return (
    <div className='action'>
      <div>
        <h2 className='action__title'>Do you have a new product?</h2>
        <p className='action__description'>Always remember to keep your inventory updated to get the most out of your metrics. This is important for the health of your business and pocket. The secret of success is to be constant!</p>

      </div>

      <button className='action__button' onClick={() => {
        console.log('hola')
        dispatch(actionModalAddItem())
      }}>add new product</button>

      <Modal />
    </div>
  )
}
