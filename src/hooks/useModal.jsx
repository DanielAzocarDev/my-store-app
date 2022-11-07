import React, { useState } from 'react'

export const useModal = () => {

  const [modal, setModal] = useState(false)

  const closeModal = () => setModal(!modal)
  return { modal, closeModal }
}
