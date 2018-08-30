import React, { Component } from 'react';

export default class Task extends Component {  
  render() {
    
    return (
      <div className="Task">
        <span className="taskWrapper" style={{textDecoration: this.props.todo.done ? 'line-through' : 'none'}}>
          <button className="deleteTask" onClick={(event) => this.props.deleteTask(event)}></button>
          {this.props.todo.value}
        </span>
        <button onClick={() => 
          this.props.changeCompleteValue(this.props.todo.id)}>{this.props.todo.done ? 'Undo' : 'Complete'}</button>
      </div>
    )
  };
};
