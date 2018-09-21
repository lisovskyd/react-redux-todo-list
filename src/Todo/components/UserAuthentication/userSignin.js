import React from 'react';
import SigninForm from '../SigninForm';

export default class ContactPage extends React.Component {
  postSigninData = (data) => {
    const dataBody = {
      username: data.login,
      password: data.password 
    }
    fetch('http://localhost:3001/signin', {
      method: "POST",      
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .catch(error => {
      console.log(error)
    });
  };

  render() {
    return <SigninForm onSubmit={this.postSigninData} />
  };
};