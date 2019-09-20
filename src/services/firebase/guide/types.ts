
export interface FirebaseState {
  pending: boolean,
  allIds: string[],
  byData: {[id: string]: Guide},
  error: string
};

export interface Guide {
  id: string,
  createdAt: number,
  updatedAt: number,
  game: string,
  platform: string,
  title: string,
  author: string,
  steps: string[]
};

export interface BasicGuide {
  id: string,
  title: string,
  author: string,
  steps: string[]
};

export enum ActionTypes {
  GET_GUIDE_REQUEST = '@@firebase/GET_GUIDE_REQUEST',
  GET_GUIDE_SUCCESS = '@@firebase/GET_GUIDE_SUCCESS',
  GET_GUIDE_FAILURE = '@@firebase/GET_GUIDE_FAILURE',
};