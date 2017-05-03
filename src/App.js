import React, { Component } from 'react';
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import cuid from 'cuid';
import TodoHeader from './components/TodoHeader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';

class App extends Component {

  state = {
    todos: {
      '1': {id: '1', text: 'aaa', completed: true},
      '2': {id: '2', text: 'bbb', completed: true},
      '3': {id: '3', text: 'ccc', completed: false},
    },
    todoIds: ['1', '2'],
  }

  handleCreateTodo = (text) => {

    const newId = cuid();

    this.setState({
      todos: {
        ...this.state.todos,
        [newId]: {
          id: newId,
          text: text,
          completed: false,
        },
      },
      todoIds: [...this.state.todoIds, newId],      
    })
  }

  handleToggleComplete = (id, completed) => {
    // Object Way
    const todos = this.state.todos;
    todos[id].completed = completed;
    this.setState({
      todos: todos,
    });
  }

  handleDeleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos;
    delete todos[id];

    const newTodoIds = _.filter(this.state.todoIds, (todoId) => {
      return id !== todoId;
    });
    this.setState({
      todos: todos,
      todoIds: newTodoIds,
    })
  }

  handleFilter = (filter) => {
    this.setState({
      filter: filter,
    })
  }

  render() {

    const filter = this.state.filter; 
    const todos = this.state.todos; 
    const todoIds = this.state.todoIds; 

    const todoItems = todoIds.map(function(todoId) {
      return todos[todoId];
    });

    
    let visibleTodoItems;
    switch (filter) {
      case 'active': visibleTodoItems = _.filter(todoItems, todo => !todo.completed); break;
      case 'completed': visibleTodoItems = _.filter(todoItems, todo => todo.completed); break;
      case 'all':
      default: 
        visibleTodoItems = todoItems; break;
    }

    const activeCount = _.size(_.filter(todoItems, todo => !todo.completed));

    return (
      <div className="todoapp">
        <TodoHeader onCreateTodo={this.handleCreateTodo} />
        <TodoMain items={visibleTodoItems} onToggleComplete={this.handleToggleComplete} onDeleteTodo={this.handleDeleteTodo} />
        <TodoFooter onFilter={this.handleFilter} filter={this.state.filter} activeCount={activeCount} />
      </div>
    );
  }
}

export default App;
