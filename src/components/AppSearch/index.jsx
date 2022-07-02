import React from 'react'

import classes from './AppSearch.module.scss'
const AppSearch = ({ closeModal, searchValue, onChangeSearchInput }) => {
    return (
        <div className={classes['search']}>
            <div className={'search__arrow'} onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="#1C1B1F" />
                </svg>
            </div>
            <form>
                <input type="text" className={classes['search__input']} placeholder='Поиск...' value={searchValue} onChange={onChangeSearchInput} />
            </form>
            <div className={classes['search__close']} onClick={closeModal}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27ZM15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885Z" fill="#49454F" />
                </svg>
            </div>
        </div>
    )
}

export default AppSearch