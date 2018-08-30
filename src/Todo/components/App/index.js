import React from 'react';
import { connect } from 'react-redux';

import Main from '../Main/';

class App extends React.Component {
  render() {
    return ( 
      <Main
        storeObj={this.props.storeObj} 
      />
    )
  };  
};

const mapStateToProps = (state, ownProps) => {
  return ({
    store: state,
    ownProps
  })
};

export default connect(mapStateToProps)(App);