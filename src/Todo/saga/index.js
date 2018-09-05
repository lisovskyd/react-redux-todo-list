import { put, take, call } from 'redux-saga'


function* commentsRequest() {
  try {
    const commentsFetch = yield call('https://jsonplaceholder.typicode.com/comments/1');
    const comments = yield commentsFetch.json();
    yield put({ type:'ADD_COMMENT', payload: comments});      
  } catch (error) {
    console.log('Error: didn"t load comments')
  }
}