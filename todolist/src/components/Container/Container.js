import React from "react";
import s from './Container.module.css'
export const Container = (props) => {
    return (
        <div className={s.container}>
            {props.children}
        </div>
    )
}