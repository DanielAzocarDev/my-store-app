import React from 'react'

import './Form.scss'

export const Form = () => {
  return (
    <form className="form">
      <h3>Add Item</h3>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        required
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        required
      />
      <label htmlFor="cost">Cost</label>
      <input
        type="number"
        id="cost"
        required
      />
      <label htmlFor="units">Units</label>
      <input
        type="number"
        id="units"
        required
      />
      <button className="form-buttom">Create!</button>

      <div>
        <button
          className="clear-buttom"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Clear
        </button>
      </div>
    </form>
  )
}
