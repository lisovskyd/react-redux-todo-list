import React, { Component } from 'react';
import { connect } from 'react-redux';

import { commentRequest, stopAddComments } from '../../../actions/';

const showLi = (elem, index) => <li key={index}>{elem}</li>;


class Comments extends Component {
  
  render() {
    return (
      <div className="comments-wrapper">
        <span className="comments-title">Comments</span>
        <ul className="comments-list">          
          {this.props.store.map( showLi )}          
        </ul>       
        <div className="buttons-wrapper">        
          <button className="" onClick={ this.props.commentRequest }>Start</button>
          <button className="" onClick={ this.props.stopAddComments }>Stop</button>
          <button className="">Clear</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    store: state.todoListReducer.comments
  })
}

const mapDispatchToProps = { 
  commentRequest,
  stopAddComments
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);