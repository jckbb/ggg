import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { RouteApp } from './routes/';

const reducer = createNavigationReducer(RouteApp);

export { reducer as navReducer };