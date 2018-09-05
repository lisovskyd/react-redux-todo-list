import { put, call, takeLatest, take, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga'; 
import { getComments } from '../actions/';

export function* commentsRequest() {
  try {        
    // while (commentsCounter > 100) return commentsCounter = 1;
    const commentsFetch = yield call(fetch, `https://jsonplaceholder.typicode.com/comments/${1}`);
    const comments = yield commentsFetch.json();
    yield delay(1500)
    yield put(getComments(comments));
  } catch (error) {
    console.log('Error: didn"t load comments');
  }
}

export default function* newSaga() {
  yield takeEvery(getComments, commentsRequest);
}