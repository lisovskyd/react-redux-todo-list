import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../List/';
import { requestCreateTask, changeValue } from '../../../actions/';

class Form extends Component {

  handleChange = ({ target: {value} }) => this.props.changeValue(value);

  handleSubmit = (event) => {    
    event.preventDefault();
    this.props.requestCreateTask();
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <span className="app-title">Todo list</span>
          <input
            onChange={this.handleChange}
            value={this.props.inputValue}
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
  requestCreateTask, 
  changeValue
};

const mapStateToProps = (state) => {
  return ({
    inputValue: state.inputValue
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
