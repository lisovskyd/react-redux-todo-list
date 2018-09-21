import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from  'history/createBrowserHistory';
import { connect } from 'react-redux';

import Form from '../Form/';
import Comments from '../Comments/';
import { getTasksFromLocalStorage } from '../../../actions/';
import userSignup from '../UserAuthentication/userSignup';
import userSignin from '../UserAuthentication/userSignin';

const history = createBrowserHistory();

class Main extends Component {
  
  componentDidMount = () => {
    if(localStorage.getItem(`Tasks`) !== null) {
      this.props.getTasksFromLocalStorage()
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
              <Link to='/signup'>Signup</Link>/
              <Link to='/signin'>Signin</Link>
            </li>
          </ul>          
          <Route exact path='/' component={Form} />
          <Route exact path='/Comments' component={Comments} />
          <Route exact path='/signup' component={userSignup}/>
          <Route exact path='/signin' component={userSignin}/>
        </div>  
      </Router>   
    )
  };
}

const mapDispatchToProps = {
  getTasksFromLocalStorage
};

export default connect(null, mapDispatchToProps)(Main);