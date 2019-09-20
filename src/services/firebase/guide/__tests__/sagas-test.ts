import { getGuideWorker, getGuideWatcher, requestAllGuides } from '../sagas';
import { fetchGuide } from '../actions';
import { expectSaga } from 'redux-saga-test-plan';
import { ActionTypes as types } from '../types';

jest.mock('../../guide');

describe('sagas', () => {
  it('should dispatch request action for GET_GUIDE_REQUEST', () =>
    expectSaga(getGuideWatcher)
      .take(types.GET_GUIDE_REQUEST)
      .silentRun()
  );

  it('should call firebase and return action GET_GUIDE_SUCCESS', () => {
    const fakeGuide = {
      id: '12345',
      author: 'Kozi',
      createdAt: 0,
      steps: ['Run to Shadowglen change hearth to dolnaar- do all quest, leave @ lvl'],
      title: 'Darnassus rep',
      updatedAt: 0,
    };

    return expectSaga(getGuideWorker)
      .call(requestAllGuides)
      .put(fetchGuide.success(fakeGuide))
      .silentRun();
    }
  );
});