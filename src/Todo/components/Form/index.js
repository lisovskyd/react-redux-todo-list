import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List/';
import { createTask, changeValue } from '../../actions/';

class Form extends Component {

  handleChange = ({ target: {value} }) => {
    return this.props.changeValue(value)}; 

  handleSubmit = (event) => {    
    event.preventDefault();
    this.props.createTask();
  };

  render() {
    return (
      <div className="Form">
        <form onSubmit={(event) => {
          this.handleSubmit(event)
        }}>
          <span className="appTitle">Todo list</span>
          <input
            onChange={(event) =>
              this.handleChange(event)}
            value={this.props.store}
          />
        </form>
        <List
          changeCompleteValue={this.props.changeCompleteValue} 
          deleteTask={this.props.deleteTask}
        />     
      </div>
    )
  };
};

const mapDispatchToProps = {
  createTask, 
  changeValue
};

const mapStateToProps = (state) => {
  return ({
    store: state.inputValue
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
