import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { todoAuthToken } from '../../../variables/common';

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={(props) => (
    isAuthenticated === true || 
    localStorage.getItem(todoAuthToken) !== null || 
    localStorage.getItem(todoAuthToken) === undefined
      ? <Component {...props} />
      : <Redirect to='/signin' />
  )} />
}