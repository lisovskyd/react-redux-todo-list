import React from 'react';
import SignupForm from '../SignupForm';

export default class ContactPage extends React.Component {
  postRegistrationData = (data) => {
    const dataBody = {
      username: data.login,
      password: data.password,
      email: data.email,  
    }
    fetch('http://localhost:3001/singup', {
      method: "POST",      
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return <SignupForm onSubmit={this.postRegistrationData} />
  };
};