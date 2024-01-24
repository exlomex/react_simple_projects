import React, {useState} from 'react';
import {Input} from "../ui/Input/Input";
import s from './ToDoList.module.css'
import {Button} from "../ui/Button/Button";

export const ToDoList = ({todo, setTodo}) => {
    const [edit, setEdit] = useState('null')
    const [editText, setEditText] = useState('')
    function deleteToDo(id) {
        let newTodo = todo.filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodoStatus = todo.map(item => {
            if (item.id === id) {
                return {...item, status: !item.status};
            } return item
        })
        setTodo(newTodoStatus)

    }

    function editToDo(id) {
        setEdit(id)
    }

    function saveEditText(id, todo, editText, setEditText) {
        let newTodoText = todo.map(item => {
            if (item.id === id) {
                return {...item, title: editText};
            } return item
        })
        setTodo(newTodoText)
        setEditText('')
        setEdit(null)
    }

    return (
        <div className={s.list__container}>
            {
               todo.map(todoItem => (
                   <div key={todoItem.id} className={s.list__row }>
                       {
                           edit === todoItem.id ?
                               <Input
                                   type="text"
                                   value={editText}
                                   onChange={(e) => {setEditText(e.target.value)}}
                                   className={s.edit_todo}
                               />
                            : <div className={`${s.title} ${!todoItem.status ? s.title_crossed : null}`}>{todoItem.title}</div>
                       }

                       {
                           !(edit === todoItem.id) ?
                               <div className={s.buttons_container}>
                                   <Button onClick={() => {deleteToDo(todoItem.id)}}>Удалить</Button>
                                   <Button disabled={todoItem.status === false} onClick={() => {editToDo(todoItem.id)}}>Редактировать</Button>
                                   <Button onClick={() => {statusTodo(todoItem.id)}}>Статус</Button>
                               </div> :
                               <Button onClick={() => {saveEditText(todoItem.id, todo, editText, setEditText)}}>сохранить</Button>
                       }
                   </div>
               ))
            }
        </div>
    );
};
