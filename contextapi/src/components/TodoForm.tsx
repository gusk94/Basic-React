// 새로운 항목 등록할 수 있는 component
import React, { useState } from 'react'
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoForm() {
    const [value, setValue] = useState('');
    const dispatch = useTodosDispatch();

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text: value
        })
        setValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input value={value} placeholder="whaht to do?"
            onChange={e=>setValue(e.target.value)}/>
            <button>submit</button>
        </form>
    )
}

export default TodoForm;