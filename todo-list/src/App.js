import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate.js";
import Form from "./components/Form.js";
import TodoItemList from "./components/TodoItemList.js";
import Palette from "./components/Palette.js"

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']

class App extends Component {
  id = 0;
  state = {
    input: "",
    todos: [],
    color: "#343a40"
  };

  handleChange = e => {
    this.setState({
      // input 값
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo=>todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })    
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <TodoListTemplate
        form={(
          <Form
            color={color}
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}
          palette={(
            <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
          )}
          >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
