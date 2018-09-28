import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../SignupForm';
import { signupUser } from '../../../actions/';

class ContactPage extends React.Component {
  
  render() {
    return <SignupForm onSubmit={(data) => this.props.signupUser({data, history: this.props.history})} />
  };
};

const mapDispatchToProps = {
  signupUser
};

export default connect(null, mapDispatchToProps)(ContactPage);