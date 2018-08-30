import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  render() {
    return (
      <div className="Form">
        <form onSubmit={(event) => {
          this.props.handleSubmit(event)
        }}>
          <span className="appTitle">Todo list</span>
          <input
            onChange={(event) =>
              this.props.handleChange(event)}
            value={this.props.store}
          />
        </form>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return ({
    store: state.inputValue
  })
};

export default connect(mapStateToProps)(Form);
