import { combineReducers }  from 'redux';
import { ApplicationState } from '.';
import { firebaseReducer } from '../services/firebase/guide/reducer';
import { guideReducer } from '../scenes/Main/data/guide/reducer';

export default combineReducers<ApplicationState>({
  firebase: firebaseReducer,
  guide: guideReducer,
});