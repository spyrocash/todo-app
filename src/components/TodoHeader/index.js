import React, { Component } from 'react';

class TodoHeader extends Component {

  handleKeyUp = (e) => {
    console.log(this.input.value);
    if (e.keyCode === 13) {
        const todoText = this.input.value;
        this.props.onCreateTodo(todoText);
        this.input.value = '';
    }
  }

  render() {
    return (
      <header>
        <h1>todos</h1>
        <input 
          type="text"
          ref={c => this.input = c}
          className="new-todo"
          placeholder="Add new todo"
          onKeyUp={this.handleKeyUp}
        />
      </header>
    );
  }
}

export default TodoHeader;
