import { all } from 'redux-saga/effects';

import watchLoadComments from './Comments/';
import { watchAddTask, watchDeleteTask, watchtChangeCompleteValue, watchDragAndDropTasks } from './Todos/';
import { watchIsValidToken, watchSignupUser, watchSigninUser } from './Auth/';


export default function* rootSaga() {
  yield all([
    watchLoadComments(),
    watchAddTask(),
    watchDeleteTask(),
    watchtChangeCompleteValue(),
    watchDragAndDropTasks(),
    watchIsValidToken(),
    watchSignupUser(),
    watchSigninUser()
  ])
};