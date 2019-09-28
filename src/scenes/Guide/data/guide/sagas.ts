import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { GuideActionTypes as types } from './types';
import { changeCurrentStep, fetchCurrentStepCompleted } from './actions';

function setItemToLocalStorage(key: string, value: any) {
  const jsonValue = JSON.stringify(value);

  return AsyncStorage.setItem(key, jsonValue);
}

function getItemFromLocalStorage(key: string) {
  return AsyncStorage.getItem(key).then(jsonresponse => {
    if(jsonresponse)
      return JSON.parse(jsonresponse)
    
    return 0;
  });
}

export function* updateCurrentStepWorker({ payload }: ReturnType<typeof changeCurrentStep>) {
  const key = '@ggg/guide';

  try {
    yield call(setItemToLocalStorage, key, payload);
  } catch(error) {}
}

export function* readCurrentStepWorker() {
  const key = '@ggg/guide';

  try {
    const result = yield call(getItemFromLocalStorage, key);

    yield put(fetchCurrentStepCompleted(result));
  } catch(error) {}
}

export function* updateCurrentStepWatcher() {
  yield takeEvery(types.UPDATE_CURRENT_STEP, updateCurrentStepWorker);
}

export function* readGuideWatcher() {
  yield takeEvery(types.READ_CURRENT_STEP_REQUEST, readCurrentStepWorker);
}

export default function* guideSagas() {
  yield all([
    updateCurrentStepWatcher(),
    readGuideWatcher()
  ]);
}