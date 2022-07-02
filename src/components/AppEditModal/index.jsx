import React from 'react'

import classes from './AppEditModal.module.scss'

const AppEditModal = ({ removeAddModal, editTitleValue, editContentValue, onChangeEditContent,
    onChangeEditTitle, onEditList, lists }) => {
    const listEdit = () => {
        removeAddModal()
        lists.map(list => {
            return onEditList(list.id)
        })
    }
    return (
        <div className={classes['modal']}>
            <div className={classes['modal__wrapper']}>
                <h2 className={classes['modal__title']}>Изменить заметку</h2>
                <form className={classes['modal__form']}>
                    <div className={"group"}>
                        <input type="text" required value={editTitleValue} onChange={(e) => onChangeEditTitle(e)}/>
                        <span className={"highlight"}></span>
                        <span className={"bar"}></span>
                        <label>Title</label>
                    </div>
                    <div className={"group"}>
                        <input type="text" required value={editContentValue} onChange={(e) => onChangeEditContent(e)}/>
                        <span className={"highlight"}></span>
                        <span className={"bar"}></span>
                        <label>Content</label>
                    </div>
                </form>
                <div className={classes['modal__btns']}>
                    <button className={classes['modal__cancel']} onClick={removeAddModal}>Отмена</button>
                    <button className={classes['modal__add']} onClick={listEdit}>изменить</button>
                </div>
            </div>
        </div>
    )
}

export default AppEditModal