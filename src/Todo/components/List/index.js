import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/';

class List extends Component {

  render() {
    const renderTodo = (complitedValue) => this.props.store.map((todo, index) => {
      return todo.complited === `${complitedValue}` ? (
        <Task 
          key={todo.id}
          todo={todo}
          index={index}
          changeCompleteValue={this.props.changeCompleteValue}
          deleteTask={()=> this.props.deleteTask(todo.id)}
        />
      ) : ''
    })
    return (
      <div className="listWrapper">
        <div className="List">
          <span className="listTitle">Test</span>
          { renderTodo('test') }
        </div>
        <div className="List">
          <span className="listTitle">Todo</span>
          { renderTodo('todo') }
        </div>
        <div className="List inProgress">
          <span className="listTitle">In progress</span> 
          { renderTodo('in progress') }
        </div>      
        <div className="List Done">
          <span className="listTitle">Done</span>  
          { renderTodo('done') }
        </div>
      </div>      
    )
  };
};

const mapStateToProps = (state) => {
  return ({
    store: state.todos
  })
};

export default connect(mapStateToProps)(List);