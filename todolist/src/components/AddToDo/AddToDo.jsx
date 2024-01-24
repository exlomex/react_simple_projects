import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Input} from "../ui/Input/Input";
import s from './AddToDo.module.css'
import {Button} from "../ui/Button/Button";

export const AddToDo = ({todo, setTodo}) => {
    const [task, setTask] = useState('')
    function addNewTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: task,
                status: true
            }]
        )
    }

    return (
        <div className={s.addToDo}>
            <Input
                className={s.addInput}
                type="text"
                placeholder={'Введите новую задачу'}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <Button onClick={() => {addNewTodo()}}>Добавить</Button>
        </div>
    );
};
