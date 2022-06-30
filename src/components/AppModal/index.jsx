import React from 'react'


import classes from './AppModal.module.scss'

const AppModal = ({ children }) => {
  return (
    <div className={classes['modal']}>
        <form className={classes['modal__form']}>
            {children}
        </form>
    </div>
  )
}

export default AppModal