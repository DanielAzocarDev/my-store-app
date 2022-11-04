import React from 'react'

import './Item.scss'
export const Item = () => {
  return (
    <div className="item">
      <h3>Item</h3>
      <div className="data-container" >
        <div>
          <p>price</p>
          <p>cost</p>
          <p>units</p>
        </div>
        <div>
          {/* <p>{price}</p>
          <p>{cost}</p>
          <p>{units}</p> */}
        </div>
      </div>
      <div className="item-btns">
        <button className="btn-delete" >
          Delete
        </button>
        <button
          className="btn-edit"

        >
          Edit
        </button>
      </div>
    </div>
  )
}
