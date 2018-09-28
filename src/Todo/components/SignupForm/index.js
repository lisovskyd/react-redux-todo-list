import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

  render() {
  const { handleSubmit } = this.props;
    return (
      <form className="registration-form" onSubmit={ handleSubmit }>
        <h2 className="registration-form__title">Signup</h2>
        <div className="registration-form__fields">
          <label htmlFor="login">User name:</label>
          <Field className="registration-form__login inputs" name="login" component="input" type="text" />
        </div>
        <div className="registration-form__fields">
          <label htmlFor="password">Password:</label>
          <Field className="registration-form__password inputs" name="password" component="input" type="password" />
        </div>
        <div className="registration-form__fields">
          <label htmlFor="email">Email:</label>
          <Field className="registration-form__email inputs" name="email" component="input" type="email" />
        </div>
        <button className="auth-form-btn" type="submit">Submit</button>
      </form>
    )
  }  
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

export default ContactForm;