import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/';

class List extends Component {

  render() {
    return (
      <div className="List">
        {this.props.store.map((todo, index) => {
          return (
            <Task 
              key={todo.id}
              todo={todo}
              index={index}
              changeCompleteValue={this.props.changeCompleteValue}
              deleteTask={()=> this.props.deleteTask(todo.id)} 
            />
          )
        })}
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