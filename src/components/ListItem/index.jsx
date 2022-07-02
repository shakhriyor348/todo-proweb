import React, { useState } from 'react'
import AppEditModal from '../AppEditModal'
import classes from './ListItem.module.scss'

const ListItem = ({ list, removeListItem,  onEditList }) => {

    const [editTitleValue, setEditTitleValue] = useState('')
    const [editContentValue, setEditContentValue] = useState('')
    const [showEditModal, setShowEditModal] = useState(false)

    const onChangeEditTitle = (e) => {
        setEditTitleValue(e.target.value)
    }

    const onChangeEditContent = (e) => {
        setEditContentValue(e.target.value)
    }

    const onEditListItem = () => {
        setEditTitleValue('')
        setEditContentValue('')
        setShowEditModal(true)
    }

    const removeEditModal = () => {
        setShowEditModal(false)
    }

    return (
        <>
            <div className={classes['list']}>
                <div className={classes['list__wrapper']}>
                    <h2 className={classes['list__title']}>{list.title}</h2>
                    <span className={classes['list__date']}>{list.date}</span>
                    <p className={classes['list__description']}>{list.text}</p>
                </div>
                <div className={classes['list__buttons']}>
                    <div className={classes['list__buttons-edit']} onClick={onEditListItem}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z" fill="#6750A4" />
                        </svg>
                        <span className={classes['list__buttons-editText']}>РЕДАКТИРОВАТЬ</span>
                    </div>
                    <div className={classes['list__buttons-trash']}>
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#CF1B1B" />
                        </svg>
                        <span className={classes['list__buttons-trashText']} onClick={() => removeListItem(list.id)}>Удалить</span>
                    </div>
                </div>
            </div>
            {showEditModal && <AppEditModal editTitleValue={editTitleValue} editContentValue={editContentValue} removeAddModal={removeEditModal} onChangeEditContent={onChangeEditContent} onChangeEditTitle={onChangeEditTitle} onEditList={onEditList} list={list} />}
        </>

    )
}

export default ListItem