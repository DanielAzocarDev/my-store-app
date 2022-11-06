import React, { useState } from 'react'
import { Modal } from '../Modal/Modal'


import './Action.scss'
export const Action = () => {

  const [modal, setModal] = useState(false)
  return (
    <div className='action'>
      <div>
        <h2 className='action__title'>Do you have a new product?</h2>
        <p className='action__description'>Always remember to keep your inventory updated to get the most out of your metrics. This is important for the health of your business and pocket. The secret of success is to be constant!</p>

      </div>

      <button className='action__button' onClick={() => setModal(!modal)}>add new product</button>

      <Modal open={modal} />
    </div>
  )
}
