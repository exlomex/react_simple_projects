import React from 'react';
import s from './Header.module.css'
export const Header = () => {
    return (
        <div className={s.header}>
            <h1 className={s.header__title}>Todo List</h1>
        </div>
    );
};
