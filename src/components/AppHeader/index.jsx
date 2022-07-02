import React from 'react'
import AppSearch from '../AppSearch';


import classes from './AppHeader.module.scss'


const AppHeader = ({setOpenSearch, openSearch, searchValue, onChangeSearchInput, setSearchValue}) => {
   

    const handleOpenModal = () => {
        setOpenSearch(true)
    }

    const handleCloseModal = () => {
        setOpenSearch(false)
    }

    return (
        openSearch ? <AppSearch closeModal={handleCloseModal} searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} setSearchValue={setSearchValue}/> :
            <div className={classes['appHeader__wrapper']}>
                <h2 className={classes['appHeader__wrapper-title']}>Заметки</h2>
                <div className={classes['appHeader__wrapper-icon']} onClick={handleOpenModal}>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.14 15.905L26.735 24.5L24.5 26.735L15.905 18.14C14.3 19.295 12.365 20 10.25 20C4.865 20 0.5 15.635 0.5 10.25C0.5 4.865 4.865 0.5 10.25 0.5C15.635 0.5 20 4.865 20 10.25C20 12.365 19.295 14.3 18.14 15.905ZM10.25 3.5C6.515 3.5 3.5 6.515 3.5 10.25C3.5 13.985 6.515 17 10.25 17C13.985 17 17 13.985 17 10.25C17 6.515 13.985 3.5 10.25 3.5Z" fill="#49454F" />
                    </svg>

                </div>

            </div>
    )
}

export default AppHeader