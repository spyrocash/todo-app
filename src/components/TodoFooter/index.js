import React, { Component } from 'react';

class TodoFooter extends Component {

  render() {
    return (
      <footer className="footer">
      	<span className="todo-count">
      		<strong>{this.props.activeCount}</strong> item left
      	</span>
      	<ul className="filters">
      		<li><a href="#" className={this.props.filter === 'all' ? 'selected' : ''} onClick={e => this.props.onFilter('all')}>All</a></li>
      		<li><a href="#" className={this.props.filter === 'active' ? 'selected' : ''} onClick={e => this.props.onFilter('active')}>Active</a></li>
      		<li><a href="#" className={this.props.filter === 'completed' ? 'selected' : ''} onClick={e => this.props.onFilter('completed')}>Completed</a></li>
      	</ul>
      </footer>
    );
  }
}

export default TodoFooter;
