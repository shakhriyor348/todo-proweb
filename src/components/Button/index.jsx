import React from 'react';
import classes from './Button.module.scss'

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={classes['button']}>
        {children}
    </button>
  )
}

export default Button