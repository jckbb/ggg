import { ActionTypes as types, FirebaseState } from './types';
import { Reducer } from 'redux';

const initialState: FirebaseState = {
  pending: false,
  byData: {},
  allIds: [],
  error: '',
};

const reducer: Reducer<FirebaseState, any> = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_GUIDE_REQUEST:
      return {
        ...state,
        pending: true
      };
    case types.GET_GUIDE_SUCCESS:
      return {
        ...state,
        pending: false,
        byData: action.payload.data,
        allIds: action.payload.ids,
      };
    case types.GET_GUIDE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export { reducer as firebaseReducer };