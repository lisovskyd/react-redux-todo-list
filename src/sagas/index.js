import { all } from 'redux-saga/effects';

import watchLoadComments from './Comments/';
import { watchAddTask, watchDeleteTask, watchtChangeCompleteValue, watchDragAndDropTasks } from './Todos/';
import { watchIsValidToken, watchSignupUser, watchSigninUser } from './Auth/'
import { watchGetFromLocalStorage } from './LocalStorage/'


export default function* rootSaga() {
  yield all([
    watchLoadComments(),
    watchAddTask(),
    watchGetFromLocalStorage(),
    watchDeleteTask(),
    watchtChangeCompleteValue(),
    watchDragAndDropTasks(),
    watchIsValidToken(),
    watchSignupUser(),
    watchSigninUser()
  ])
};