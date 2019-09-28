import { GuideActionTypes as types } from '../types';
import { changeCurrentStep } from '../actions';

describe('actions', () => {
  it('should create an action to update guide record', () => {
    const expectedAction = {
      type: types.UPDATE_CURRENT_STEP,
      error: undefined,
      meta: undefined,
      payload: 0
    };
    const expectedPayload = 0;

    expect(changeCurrentStep(0)).toEqual(expectedAction);
  });
});
