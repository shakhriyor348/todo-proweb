import React from 'react'


import classes from './AppModal.module.scss'

const AppAddModal = ({ removeAddModal, addListItem,title, onChangeTitle, contentInput, onChangeContent }) => {
  return (
    <div className={classes['modal']}>
      <div className={classes['modal__wrapper']}>
        <h2 className={classes['modal__title']}>Добавить заметку</h2>
        <form className={classes['modal__form']}>
          <div className={"group"}>
            <input type="text" required value={title} onChange={onChangeTitle} />
            <span className={"highlight"}></span>
            <span className={"bar"}></span>
            <label>Title</label>
          </div>
          <div className={"group"}>
            <input type="text" required value={contentInput} onChange={onChangeContent} />
            <span className={"highlight"}></span>
            <span className={"bar"}></span>
            <label>Content</label>
          </div>
        </form>
        <div className={classes['modal__btns']}>
          <button className={classes['modal__cancel']} onClick={removeAddModal}>Отмена</button>
          <button className={classes['modal__add']} onClick={addListItem}>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default AppAddModal