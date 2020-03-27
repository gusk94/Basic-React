// 할 일 항목에 대한 정보를 보여줌
import React from 'react'
import './TodoItem.css'
import { Todo, useTodosDispatch } from '../contexts/TodosContext'

export type TodoItemProps = {
    todo: Todo;
}

function TodoItem({todo}: TodoItemProps) {
    const dispatch = useTodosDispatch();
    const onToggle = () => {
        dispatch({
            type: 'TOGGLE',
            id: todo.id
        })
    }

    const onRemove = () => {
        dispatch({
            type: 'REMOVE',
            id: todo.id
        })
    }
    return (
        <li className={`TodoItem ${todo.finished ? 'done':''}`}>
            <span className="text" onClick={onToggle}>{todo.text}</span>
            <span className="remove" onClick={onRemove}>[delete]</span>
        </li>
    )
}

export default TodoItem