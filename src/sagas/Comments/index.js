import { put, call, takeLatest, take, cancel } from 'redux-saga/effects';
import { delay } from 'redux-saga'; 

import { getComments, commentRequest } from '../../actions/';
import * as tasksType  from '../../variables/actionTypes';

export default function* watchLoadComments() { 
  const comments = yield takeLatest(tasksType.REQUEST_COMMENT, loadCommentsSags);
  yield take(tasksType.STOP_ADD_COMMENTS);
  yield cancel(comments);
};

function* loadCommentsSags() {
  let commentsCounter = 1;
  if(commentsCounter > 100) return commentsCounter = 1;
  while(commentsCounter < 100) {  
    try {      
        yield(commentRequest());
        yield delay(1500);
        const commentsFetch = yield call(fetch, `https://jsonplaceholder.typicode.com/comments/${commentsCounter}`);
        const comments = yield commentsFetch.json();
        yield put(getComments(comments));
        commentsCounter++      
    } catch (error) {
      console.log('Error: didn"t load comments');
    }
  }  
};