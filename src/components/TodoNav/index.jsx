import React from 'react'
import Button from '../Button'
import classes from './TodoNav.module.scss'
const TodoNav = ({ openSearch, onClickButton, grid }) => {
    return (
        <div className={classes['todo']}>
            <h2 className={classes['todo__title']}>
                {openSearch ? 'Поиск' : 'Все заметки'}
            </h2>
            <Button onClick={onClickButton}>
                {grid ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 18H3C2.45 18 2 17.55 2 17V14H6V18ZM6 12H2V8H6V12ZM6 6H2V3C2 2.45 2.45 2 3 2H6V6ZM12 18H8V14H12V18ZM12 12H8V8H12V12ZM12 6H8V2H12V6ZM17 18H14V14H18V17C18 17.55 17.55 18 17 18ZM18 12H14V8H18V12ZM18 6H14V2H17C17.55 2 18 2.45 18 3V6Z" fill="#6750A4" />
                </svg>
                    : <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9H3C3.55 9 4 8.55 4 8V6C4 5.45 3.55 5 3 5H1C0.45 5 0 5.45 0 6V8C0 8.55 0.45 9 1 9ZM1 14H3C3.55 14 4 13.55 4 13V11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11V13C0 13.55 0.45 14 1 14ZM1 4H3C3.55 4 4 3.55 4 3V1C4 0.45 3.55 0 3 0H1C0.45 0 0 0.45 0 1V3C0 3.55 0.45 4 1 4ZM6 9H17C17.55 9 18 8.55 18 8V6C18 5.45 17.55 5 17 5H6C5.45 5 5 5.45 5 6V8C5 8.55 5.45 9 6 9ZM6 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10H6C5.45 10 5 10.45 5 11V13C5 13.55 5.45 14 6 14ZM5 1V3C5 3.55 5.45 4 6 4H17C17.55 4 18 3.55 18 3V1C18 0.45 17.55 0 17 0H6C5.45 0 5 0.45 5 1Z" fill="#6750A4" />
                    </svg>}

                <span className={classes['todo__span'] } >{grid ? 'Сетка' : 'Список'}</span>
            </Button>
        </div>
    )
}

export default TodoNav