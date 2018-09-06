import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from  'history/createBrowserHistory';
import { connect } from 'react-redux';

import Form from '../Form/';
import Comments from '../Comments/';
import { getTasksFromLocalStorage } from '../../../actions/';

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
              <Link to='/'>Todo Application</Link>
            </li>
            <li className="bookmarks">
              <Link to='/Comments'>Application comments</Link>
            </li>
            <li className="bookmarks">
              <Link to='/Test'>Test</Link>
            </li>
          </ul>
          <Route exact path='/' component={Form} />
          <Route exact path='/Comments' component={Comments} />
        </div>  
      </Router>   
    )
  };
}

const mapDispatchToProps = {
  getTasksFromLocalStorage
};

export default connect(null, mapDispatchToProps)(Main);