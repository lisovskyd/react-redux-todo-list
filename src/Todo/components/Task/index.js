import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';

import { deleteTask, changeCompleteValue } from '../../actions/';

class Task extends Component {
  
  getItemStyle = (isDragging, draggableStyle) => ({
    boxShadow: isDragging ? '-1px 2px 50px -7px rgba(0,0,0,1)' : 'none',
    border: isDragging ? '3px solid lightslategray' : draggableStyle.border,
    ...draggableStyle
  });

  render() {
    return (
      <Draggable draggableId={this.props.todo.id} key={this.props.todo.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div className="Task"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={this.getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style)}
          >
            <span className={this.props.todo.done ? 'taskWrapper taskDecoration' : 'taskWrapper'}>
              <button className="deleteTask" onClick={() => this.props.deleteTask(this.props.todo.id)}></button>
              {this.props.todo.value}
            </span>
            <select value={this.props.todo.complited} className="todoStatus" onChange={(event) => this.props.changeCompleteValue(this.props.todo.id, event)}>
              <option>test</option>
              <option>todo</option>
              <option>in progress</option>
              <option>done</option>
            </select>
          </div>
        )}          
      </Draggable>
    )
  };
};

const mapDispatchToProps = {
  deleteTask, 
  changeCompleteValue
};

export default connect(null, mapDispatchToProps)(Task);