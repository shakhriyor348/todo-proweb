import React from 'react'


import classes from './AppModal.module.scss'

const AppModal = ({ children, cancel, edit, removeAddModal }) => {
  return (
    <div className={classes['modal']}>
      <div className={classes['modal__wrapper']}>
        <h2 className={classes['modal__title']}>Добавить заметку</h2>
        <form className={classes['modal__form']}>
          {children}
        </form>
        <div className={classes['modal__btns']}>
          <button className={classes['modal__cancel']} onClick={removeAddModal}>{cancel}</button>
          <button className={classes['modal__add']}>{edit}</button>
        </div>
      </div>
    </div>
  )
}

export default AppModal