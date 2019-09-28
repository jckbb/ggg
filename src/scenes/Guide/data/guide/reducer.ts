import { GuideState, GuideActionTypes as types } from './types';
import { Reducer } from 'redux';

const initialState: GuideState = {
  guideId: '',
  currentStep: 0,
  createdAt: 0,
  updatedAt: 0,
  hasScrolledAway: false,
};

const reducer: Reducer<GuideState> = (state = initialState, action: any) => {
  switch(action.type) {
    case types.UPDATE_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case types.READ_CURRENT_STEP_SUCCESS:
      return {
        ...state,
        currentStep: action.payload
      };
    default:
      return state;
  }
}

export { reducer as guideReducer };