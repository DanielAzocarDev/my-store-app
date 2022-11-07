import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/slices/items/itemsSlice'
import { v4 as uuid } from 'uuid';

import './Form.scss'
import { actionModalAddItem } from '../../store/slices/modals/modals';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.price) {
    errors.price = 'Required';
  }
  if (!values.cost) {
    errors.cost = 'Required';
  }
  if (!values.units) {
    errors.units = 'Required';
  }

  return errors;
};

export const Form = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      cost: '',
      units: ''
    },
    validate,
    onSubmit: values => {

      const { title, price, cost, units } = values

      const item = {
        id: uuid(),
        title,
        price,
        cost,
        units
      }
      dispatch(addItem(item))

      dispatch(actionModalAddItem())
    }
  })

  const dispatch = useDispatch()

  console.log(formik.errors)
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className='form__field'>
        <label className='form__field__label' htmlFor="title">Title</label>
        <input
          className={!formik.errors.title ? 'form__field__input' : 'form__field__input form__field__input__error'}
          type="text"
          id="title"
          placeholder='Add the title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className='form__field'>
        <label className='form__field__label' htmlFor="title">Price</label>
        <input
          className={!formik.errors.price ? 'form__field__input' : 'form__field__input form__field__input__error'}
          type="text"
          id="price"
          placeholder='Add the prices'
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </div>
      <div className='form__field'>
        <label className='form__field__label' htmlFor="title">Cost</label>
        <input
          className={!formik.errors.cost ? 'form__field__input' : 'form__field__input form__field__input__error'}
          type="text"
          id="cost"
          placeholder='Add the cost'
          onChange={formik.handleChange}
          value={formik.values.cost}
        />
      </div>
      <div className='form__field'>
        <label className='form__field__label' htmlFor="title">Units</label>
        <input
          className={!formik.errors.units ? 'form__field__input' : 'form__field__input form__field__input__error'}
          type="text"
          id="units"
          placeholder='Add the units'
          onChange={formik.handleChange}
          value={formik.values.units}
        />
      </div>


      <button className="form__button" type='submit'>Create!</button>


    </form>
  )
}
