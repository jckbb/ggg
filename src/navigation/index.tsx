import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { RouteApp } from './routes';
import { ApplicationState } from 'store';


const App = createReduxContainer(RouteApp);
const mapStateToProps = (state: ApplicationState) => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

export { AppWithNavigationState as Navigator };