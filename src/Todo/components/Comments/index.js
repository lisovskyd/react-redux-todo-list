import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component { 
  
  render() {
    return (
      <div className="comments-wrapper">
        <span className="comments-title">Comments</span>
        <ul className="comments-list">
          
          {this.props.store.map((elem) => {
            return (<li key={elem.id}>{elem}</li>)
          })}          
        </ul>       
        <div className="buttons-wrapper">        
          <button className="commentsButtons" onClick={this.props.onGetComments}>Start</button>
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

export default connect(mapStateToProps)(Comments);