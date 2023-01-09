import React from 'react'
import {ToastContainer} from 'react-toastify'

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className='modal__content' onClick={e => e.stopPropagation()}>
        {children}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Modal