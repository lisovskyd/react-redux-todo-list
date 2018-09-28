import React from 'react';
import { connect } from 'react-redux';

import SigninForm from '../SigninForm';
import { signinUser } from '../../../actions/';

class ContactPage extends React.Component {

  render() {
    return <SigninForm onSubmit={(data) => this.props.signinUser({data, history: this.props.history})} />
  };
};

const mapDispatchToProps = {
  signinUser
};

export default connect(null, mapDispatchToProps)(ContactPage);