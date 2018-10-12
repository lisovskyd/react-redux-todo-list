import React from 'react';
import { connect } from 'react-redux';

import { commentRequest, stopAddComments } from '../../../actions/';

const showLi = (elem, index) => <li key={index}>{elem}</li>;


const Comments = ({ store, commentRequest, stopAddComments}) => (
  <div className="comments-wrapper">
    <span className="comments-title">Comments</span>
    <ul className="comments-list">          
      {store.map( showLi )}          
    </ul>       
    <div className="buttons-wrapper">        
      <button onClick={ commentRequest }>Start</button>
      <button onClick={ stopAddComments }>Stop</button>
      <button>Clear</button>
    </div>
  </div>
)

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