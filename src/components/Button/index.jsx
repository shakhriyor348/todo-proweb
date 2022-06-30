import React from 'react';
import classes from './Button.module.scss'

const Button = ({ children, onClick, showAddModal }) => {
  return (
    <button onClick={onClick} className={showAddModal ? classes['remove'] : classes['button']}>
        {children}
    </button>
  )
}

export default Button