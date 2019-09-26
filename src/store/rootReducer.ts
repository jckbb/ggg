import { combineReducers }  from 'redux';
import { ApplicationState } from '.';
import { firebaseReducer } from '../services/firebase/guide/reducer';
import { guideReducer } from '../scenes/Main/data/guide/reducer';
import { navReducer } from '../navigation/reducer'

export default combineReducers<ApplicationState>({
  nav: navReducer,
  firebase: firebaseReducer,
  guide: guideReducer,
});