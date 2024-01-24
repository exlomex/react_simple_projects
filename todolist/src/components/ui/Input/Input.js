import React from 'react';
import s from './Input.module.css'
export const Input = ({type, placeholder, value, onChange, className}) => {
    return (
        <input
            className={`${s.input} ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};



