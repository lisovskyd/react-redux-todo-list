import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List/';
import Form from '../Form/';
import Comments from '../Comments/';
import { saveStateToStorage, createTask, changeValue, deleteTask, changeCompleteValue, getComments } from '../../actions/';

class Main extends Component {
  
  componentDidMount = () => {
    if(localStorage.getItem(`Tasks`) !== null) {
      this.props.saveStateToStorage()
    };    
  };

  handleChange = ({ target: {value} }) => this.props.changeValue(value); 

  handleSubmit = (event) => {    
    event.preventDefault();
    this.props.createTask();
  };

  // Does it make any sense to create own state for Task component, then use it for handleSelected
  
  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit} 
        />      
        <List
          changeCompleteValue={this.props.changeCompleteValue} 
          deleteTask={this.props.deleteTask}
        /> 
        <Comments 
          onGetComments={this.props.getComments}
        />
      </div>      
    )
  };
}

const mapDispatchToProps = {
  saveStateToStorage, 
  createTask, 
  changeValue, 
  deleteTask, 
  changeCompleteValue, 
  getComments
};

export default connect(null, mapDispatchToProps)(Main);