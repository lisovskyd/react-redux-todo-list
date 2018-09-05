import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getComments } from '../../actions/';

const showLi = (elem, index) => <li key={index}>{elem}</li>;

class Comments extends Component {
  
  getComments = () => this.props.getComments;
  
  render() {
    return (
      <div className="comments-wrapper">
        <span className="comments-title">Comments</span>
        <ul className="comments-list">
          
          {this.props.store.map( showLi )}          
        </ul>       
        <div className="buttons-wrapper">        
          <button className="" onClick={this.getComments}>Start</button>
          <button className="">Pause</button>
          <button className="">Clear</button>
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