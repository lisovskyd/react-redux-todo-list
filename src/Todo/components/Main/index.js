import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from  'history/createBrowserHistory';

import Form from '../Form/';
import Comments from '../Comments/';
import { saveStateToStorage } from '../../actions/';

import Test from '../Test/';

const history = createBrowserHistory();

class Main extends Component {
  
  componentDidMount = () => {
    if(localStorage.getItem(`Tasks`) !== null) {
      this.props.saveStateToStorage()
    };    
  };
  
  render() {

    return (   
      <Router history={history}>
        <div className="App">
          <ul className="bookmarksWrapper">
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
          <Route exact path='/Test' component={Test} />
        </div>  
      </Router>   
    )
  };
}

const mapDispatchToProps = {
  saveStateToStorage
};

export default connect(null, mapDispatchToProps)(Main);