import { createSwitchNavigator } from 'react-navigation';
import Main from '../../scenes/Main';

const RouteApp = createSwitchNavigator({
  app: { screen: Main }
});

export { RouteApp };