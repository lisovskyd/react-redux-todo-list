import React, { Component } from 'react';
import { connect } from 'react-redux';

import uuid from 'uuid';
import { getComments } from '../../actions/';

class Comments extends Component { 
  
  render() {
    return (
      <div className="comments-wrapper">
        <span className="comments-title">Comments</span>
        <ul className="comments-list">
          
          {this.props.store.map((elem) => {
            return (<li key={uuid()}>{elem}</li>)
          })}          
        </ul>       
        <div className="buttons-wrapper">        
          <button className="commentsButtons" onClick={this.props.getComments}>Start</button>
          <button className="commentsButtons">Pause</button>
          <button className="commentsButtons">Clear</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    store: state.comments
  })
}

const mapDispatchToProps = { 
  getComments
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);