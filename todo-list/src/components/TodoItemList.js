import React, { Component } from 'react';
import TodoItem from './TodoItem.js'

class TodoItemList extends Component {
    // 최적화(component life cycle method)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            // (todo) => (<TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={id}/>)
            ({id, color, text, checked}) => (
                <TodoItem
                id = {id}
                color={color}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}/>
            )
        )

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;