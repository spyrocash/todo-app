import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {

	static propTypes = {
		onToggleComplete: PropTypes.func,
		onDeleteTodos: PropTypes.func,
	}

  render() {
  	const { id, text, completed } = this.props;
    return (
      <li className={completed ? 'completed' : ''}>
      	<input
      	  className="toggle"
      	  type="checkbox"
      	  checked={completed}
      	  onClick={e => this.props.onToggleComplete(id, !completed)}
      	 />
      	<label>{text}</label>
      	<button type="button" className="destroy" onClick={e => this.props.onDeleteTodos(id)}></button>
      </li>
    );
  }
}

export default TodoItem;
