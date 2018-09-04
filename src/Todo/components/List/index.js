import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../Task/';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { onDragEnd } from '../../actions/';

class List extends Component {

  getListStyle = () => ({
    padding: 8,
    width: 250
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
          <div className="List">
            <span className="listTitle">Test</span>
            { renderTodo('test') }
          </div>        
          <Droppable 
            droppableId="droppable" 
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
          <div className="List inProgress">
            <span className="listTitle">In progress</span> 
            { renderTodo('in progress') }
          </div>      
          <div className="List Done">
            <span className="listTitle">Done</span>  
            { renderTodo('done') }
          </div>
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

