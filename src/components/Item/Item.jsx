import React from 'react'
import sample from '../../assets/sample.jpg'


import './Item.scss'
export const Item = () => {
  return (
    <div className="item">
      <div className='item__image__container'>
        <img src={sample} className='item__image' />
      </div>
      <div className='item__data'>
        <h3 className='item__data__title'>Item Name</h3>
        <div className='item__data__container'>
          <div className='item__data__field'>
            <h4 className='item__data__field__title'>Price</h4>
            <p className='item__data__field__number'>$2.400</p>
          </div>
          <div className='item__data__field'>
            <h4 className='item__data__field__title'>Cost</h4>
            <p className='item__data__field__number'>$1.300</p>
          </div>
          <div className='item__data__field'>
            <h4 className='item__data__field__title'>Units</h4>
            <p className='item__data__field__number'>50</p>
          </div>
        </div>
      </div>
    </div>
  )
}
