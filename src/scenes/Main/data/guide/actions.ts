import { action } from 'typesafe-actions';
import { GuideActionTypes as types } from './types';

export const changeCurrentStep = (payload: number) => action(types.UPDATE_CURRENT_STEP, payload);

export const fetchCurrentStep = () => action(types.READ_CURRENT_STEP_REQUEST);
export const fetchCurrentStepCompleted = (payload: number) => action(types.READ_CURRENT_STEP_SUCCESS, payload);