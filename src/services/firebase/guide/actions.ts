import { createAsyncAction } from 'typesafe-actions';
import { ActionTypes as types, Guide } from './types';

export const fetchGuide = createAsyncAction(
  types.GET_GUIDE_REQUEST,
  types.GET_GUIDE_SUCCESS,
  types.GET_GUIDE_FAILURE)<void, {ids: string[], data: {[id: string]: Guide}}, Error>();