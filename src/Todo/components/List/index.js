import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { onDragEnd } from '../../../actions/';

class List extends Component {

  getListStyle = () => ({
    padding: 8,
    width: 250,
  });

  renderTodo = (complitedValue) => this.props.store.map((todo, index) => {
    return todo.taskStatus === `${complitedValue}` ? (
      <Task 
        key={todo.id}
        todo={todo}
        index={index}
      />           
    ) : null
  })

  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <div className="list-wrapper">
          <Droppable 
              droppableId="test" 
            > 
            {(provided, snapshot) => (
              <div className="list"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="list-title">Test</span>
                { this.renderTodo('test') }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable 
            droppableId="todo" 
          > 
            {(provided, snapshot) => (
              <div className="list"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="list-title">Todo</span>
                { this.renderTodo('todo') }
                {provided.placeholder}                
              </div>
            )}            
          </Droppable>
          <Droppable
            droppableId="in progress" 
          >
            {(provided, snapshot) => (
              <div className="list"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="list-title">In progress</span> 
                { this.renderTodo('in progress') }
                {provided.placeholder}
              </div>
            )} 
          </Droppable>
          <Droppable
            droppableId="done" 
          >
            {(provided, snapshot) => (
              <div className="list"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="list-title">Done</span>  
                { this.renderTodo('done') }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>        
      </DragDropContext>    
    )
  };
};

const mapStateToProps = (state) => {
  return ({
    store: state.todos
  })
};

const mapDispatchToProps = {
  onDragEnd
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

