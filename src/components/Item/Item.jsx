import React from 'react'
import sample from '../../assets/sample.jpg'


import './Item.scss'
export const Item = ({ data }) => {

  const { title, price, cost, units } = data
  return (
    <div className="item">
      <div className='item__image__container'>
        <img src={sample} className='item__image' />
      </div>
      <div className='item__data'>
        <h3 className='item__data__title'>{title}</h3>
        <div className='item__data__container'>
          <div className='item__data__field'>
            <h4 className='item__data__field__title'>Price</h4>
            <p className='item__data__field__number'>{price}</p>
          </div>
          <div className='item__data__field'>
            <h4 className='item__data__field__title'>Cost</h4>
            <p className='item__data__field__number'>{cost}</p>
          </div>
          <div className='item__data__field'>
            <h4 className='item__data__field__title'>Units</h4>
            <p className='item__data__field__number'>{units}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
