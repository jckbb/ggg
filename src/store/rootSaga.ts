import { all, fork } from  'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import firebaseSagas from 'services/firebase/guide/sagas';
import guideSagas from '../scenes/Main/data/guide/sagas';

function* rootSaga(): SagaIterator {
  yield all([
    fork(firebaseSagas),
    fork(guideSagas)
  ]);
}

export default rootSaga;
