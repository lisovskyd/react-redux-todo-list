import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={(props) => (
    isAuthenticated === true || 
    localStorage.getItem('token') !== null || 
    localStorage.getItem(`token`) === undefined
      ? <Component {...props} />
      : <Redirect to='/signin' />
  )} />
}