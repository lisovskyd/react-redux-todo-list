import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from  'history/createBrowserHistory';
import { connect } from 'react-redux';

import Form from '../Form/';
import Comments from '../Comments/';
import { watchForAuthRequestAction, logoutUser } from '../../../actions/';
import userSignup from '../UserAuthentication/userSignup';
import userSignin from '../UserAuthentication/userSignin';
import { PrivateRoute } from '../PrivateRoute/';
import { todoAuthToken } from '../../../variables/common'

const history = createBrowserHistory();

class Main extends Component {

  componentDidMount() {
    if (localStorage.getItem(todoAuthToken) === null) {
      console.log('token == null')
    } else if (localStorage.getItem(todoAuthToken) === undefined) {
      console.log('token == undefined')
    } else {
      this.props.watchForAuthRequestAction();
    };    
  };

  render() {
    return (  
      <Router history={history}>
        <div className="app">
          <ul className="bookmarks-wrapper">
            <li className="bookmarks">
              <Link to='/'>Todo list</Link>
            </li>
            <li className="bookmarks">
              <Link to='/Comments'>Comments</Link>
            </li>
            <li className="bookmarks">
              <Link to='/signup'>SignUp</Link>/
              <Link to='/signin'>SignIn</Link>
            </li>
            <li className="bookmarks">
              <Link to='/signin' onClick={this.props.logoutUser}>LogOut</Link>
            </li>
          </ul>          
          <PrivateRoute exact path="/" component={Form} isAuthenticated={this.props.isAuthenticated} />
          <Route exact path='/Comments' component={Comments} />
          <Route exact path='/signup' component={userSignup} />
          <Route exact path='/signin' component={userSignin} />
        </div>  
      </Router>         
    )
  };
}

const mapDispatchToProps = {
  watchForAuthRequestAction,
  logoutUser
};

const mapStateToProps = (state) => {
  return ({    
    isAuthenticated: state.todoListReducer.isAuthenticated
  })  
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);