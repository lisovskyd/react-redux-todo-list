import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { onDragEnd } from '../../actions/';

class List extends Component {

  getListStyle = () => ({
    padding: 8,
    width: 250,
  });

  render() {
    const renderTodo = (complitedValue) => this.props.store.map((todo, index) => {
      return todo.complited === `${complitedValue}` ? (
        <Task 
          key={todo.id}
          todo={todo}
          index={index}
        />           
      ) : null
    })
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <div className="listWrapper">
          <Droppable 
              droppableId="test" 
            > 
            {(provided, snapshot) => (
              <div className="List"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="listTitle">Test</span>
                { renderTodo('test') }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable 
            droppableId="todo" 
          > 
            {(provided, snapshot) => (
              <div className="List"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="listTitle">Todo</span>
                { renderTodo('todo') }
                {provided.placeholder}                
              </div>
            )}            
          </Droppable>
          <Droppable
            droppableId="in progress" 
          >
            {(provided, snapshot) => (
              <div className="List"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="listTitle">In progress</span> 
                { renderTodo('in progress') }
                {provided.placeholder}
              </div>
            )} 
          </Droppable>
          <Droppable
            droppableId="done" 
          >
            {(provided, snapshot) => (
              <div className="List"
                ref={provided.innerRef}                
                style={this.getListStyle()}
              >
                <span className="listTitle">Done</span>  
                { renderTodo('done') }
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

