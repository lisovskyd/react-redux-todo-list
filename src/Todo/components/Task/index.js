import React, { Component } from 'react';

export default class Task extends Component {
  
  render() {  
    return (
      <div className="Task">
        <span className={this.props.todo.done ? 'taskWrapper taskDecoration' : 'taskWrapper'}>
          <button className="deleteTask" onClick={(event) => this.props.deleteTask(event)}></button>
          {this.props.todo.value}
        </span>
        <select className="todoStatus" onChange={(event) => this.props.changeCompleteValue(this.props.todo.id, event)}>
          <option selected={this.props.todo.complited === 'test'}>test</option>
          <option selected={this.props.todo.complited === 'todo'}>todo</option>
          <option selected={this.props.todo.complited === 'in progress'}>in progress</option>
          <option selected={this.props.todo.complited === 'done'}>done</option>
        </select>
      </div>
    )
  };
};