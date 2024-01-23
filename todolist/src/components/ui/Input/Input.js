import React from 'react';
import s from './Input.module.css'
export const Input = ({type, placeholder, value, onChange}) => {
    return (
        <input className={s.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};



