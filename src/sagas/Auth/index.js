import { put, takeLatest } from 'redux-saga/effects';

import { authRequest, setTasksDatabaseToStore } from '../../actions/';
import * as tasksType  from '../../variables/actionTypes';

export function* watchSigninUser() {
  yield takeLatest(tasksType.SIGNIN_USER, signinUserSaga);
}

function* signinUserSaga({payload: { data, history }}) {
  try {
    const dataBody = {
      username: data.login,
      password: data.password 
    }
    const signinRequest = yield fetch('http://localhost:3001/signin', {
      method: "POST",      
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    const signinSuccess = yield signinRequest.json();
    yield localStorage.setItem('token', JSON.stringify(signinSuccess.token));
    // yield window.location.reload() // its not right way 
    yield history.push('/');
  } catch(err) {
    console.log(err);
  }
}

export function* watchSignupUser() {
  yield takeLatest(tasksType.SIGNUP_USER, signupUserSaga);
}

function* signupUserSaga({payload: { data, history }}) {
  try {
    const dataBody = {
      username: data.login,
      password: data.password,
      email: data.email
    }
    const saveUserToDatabaseRequest = yield fetch('http://localhost:3001/singup', {
      method: "POST",      
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    yield saveUserToDatabaseRequest.json();
    yield history.push('/signin')
  } catch(err) {
    console.log(err);
  };
};

export function* watchIsValidToken() {  
  yield takeLatest(tasksType.WATCH_FOR_AUTH_REQUEST_ACTION, isValidToken);
}

function* isValidToken() {
  try {    
    const authToken = yield JSON.parse(localStorage.getItem('token'));    
    const validateTokenRequest = yield fetch('http://localhost:3001/isAuthorized', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${authToken}`
      }
    })
    const validateToken = yield validateTokenRequest.json();    
    yield put(authRequest(validateToken.isAuthorized));
    if (validateToken.todos) {     
      yield put(setTasksDatabaseToStore(validateToken.todos))
    }    
  } catch(err) {
    localStorage.removeItem('token'); 
    console.log(err)
  }
}