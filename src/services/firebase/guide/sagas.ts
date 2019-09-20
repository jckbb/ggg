import { fork, takeEvery, call, put } from 'redux-saga/effects';
import { ActionTypes as types } from './types';
import { readGuide } from '../guide';
import { fetchGuide } from './actions';

export function* getGuideWorker() {
  try {
    const result = yield call(requestAllGuides);
    
    yield put(fetchGuide.success(result));
  } catch(error) {
    yield put(fetchGuide.failure(error));
  }
}

export function requestAllGuides() {
  return readGuide();
}

export function* getGuideWatcher() {
  yield takeEvery(types.GET_GUIDE_REQUEST, getGuideWorker);
}

export default function* firebaseSagas() {
  yield fork(getGuideWatcher);
}