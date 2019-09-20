import { ActionTypes as types, FirebaseState, Guide } from '../types';
import { firebaseReducer } from '../reducer';
import { fetchGuide,  } from '../actions';

describe('reducer', () => {
  const expectedInitialState: FirebaseState = {
    pending: false,
    allIds: [],
    byData: {},
    error: '',
  };

  it('should return initial state', () => {
    expect(firebaseReducer(undefined, <any>{})).toEqual(expectedInitialState);
  });

  it('should handle GET_GUIDE_REQUEST', () => {
    const expectedState: FirebaseState = {
      pending: true,
      byData: {},
      allIds: [],
      error: ''
    };

    expect(firebaseReducer(expectedInitialState, fetchGuide.request())).toEqual(expectedState);
  });

  it('should handle GET_GUIDE_SUCCESS', () => {
    const expectedPayload: {ids: string[], data: {[id: string]:Guide}} = {
      ids: ['12345'],
      data: {
        '12345': {
          id: '12345',
          createdAt: 0,
          updatedAt: 0,
          title: '',
          author: '',
          steps: []
        }
      }
    }
    
    const expectedState: FirebaseState = {
      pending: false,
      allIds: expectedPayload.ids,
      byData: expectedPayload.data,
      error: ''
    };

    expect(firebaseReducer(expectedInitialState, fetchGuide.success(expectedPayload))).toEqual(expectedState);
  });

  // it('should handle GET_GUIDE_FAILURE', () => {
  //   const expectedPayload = {
  //     message: 'could not successfully request guide.'
  //   };

  //   expect(firebaseReducer(expectedInitialState, {})).toEqual(expectedPayload);
  // });
});