import React from 'react';
import s from './Button.module.css'
export const Button = ({className, children, onClick}) => {
    return (
        <button
            className={`${s.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};



