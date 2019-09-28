export interface GuideState {
  guideId: string,
  currentStep: number,
  hasScrolledAway: boolean,
  updatedAt: number,
  createdAt: number
};

export enum GuideActionTypes {
  UPDATE_CURRENT_STEP = '@@guide/UPDATE_CURRENT_STEP',
  READ_CURRENT_STEP_REQUEST = '@@guide/READ_CURRENT_STEP_REQUEST',
  READ_CURRENT_STEP_SUCCESS = '@@guide/READ_CURRENT_STEP_SUCCESS',
  UPDATE_GUIDE_ID = '@@guide/UPDATE_GUIDE_ID'
};