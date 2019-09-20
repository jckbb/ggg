import { fetchGuide } from '../actions';
import { ActionTypes as types, Guide } from '../types';

describe('actions', () => {
  it('should create an action to fetch a Guide', () => {
    const expectedAction = {
      type: types.GET_GUIDE_REQUEST,
      error: undefined,
      meta: undefined,
      payload: undefined
    };

    expect(fetchGuide.request()).toEqual(expectedAction);
  });

  it('should create an action to fetch a Guide successfully and return guide', () => {
    const fakePayload: {ids: string[], data: {[id: string]: Guide}} = {
      ids: ['12345'],
      data: {
        '12345': {
          id: '12345',
          createdAt: 0,
          updatedAt: 0,
          title: '',
          author: '',
          steps: []
        },
      }
    }
    const expectedAction = {
      type: types.GET_GUIDE_SUCCESS,
      error: undefined,
      meta: undefined,
      payload: fakePayload
    };

    expect(fetchGuide.success(fakePayload)).toEqual(expectedAction);
  });

  it('should create an action to handle fetchGuide failure and return error message', () => {
    const fakeError: Error = new Error('Could not successfully fetch guide.');
    const expectedAction = {
      type: types.GET_GUIDE_FAILURE,
      error: undefined,
      meta: undefined,
      payload: fakeError,
    };

    expect(fetchGuide.failure(fakeError)).toEqual(expectedAction);
  });
});
