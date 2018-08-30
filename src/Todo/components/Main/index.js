import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List/';
import Form from '../Form/';
import Comments from '../Comments/';
import { createTask, changeValue, deleteTask, changeCompleteValue, getComments, saveStateToStorage } from '../../actions/';

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

const mapDispatchToProps = { createTask, changeValue, deleteTask, changeCompleteValue, getComments, saveStateToStorage };

export default connect(null, mapDispatchToProps)(Main);