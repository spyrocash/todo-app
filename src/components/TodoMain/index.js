import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoMain extends Component {


  handleToggleComplete = (id, completed) => {
    this.props.onToggleComplete(id, completed);
  }

  render() {

    const { items, onDeleteTodo } = this.props;

    const content = items.map(todo => {
        return (
          <TodoItem
            text={todo.text}
            id={todo.id}
            completed={todo.completed}
            onToggleComplete={this.handleToggleComplete}
            onDeleteTodos={onDeleteTodo} 
          />
        );
    });

    return (
      <section className="main">
        <input className="toggle-all" type="checkbok" />
        <ul className="todo-list">
          {content}
        </ul>
      </section>
    );
  }
}

export default TodoMain;
