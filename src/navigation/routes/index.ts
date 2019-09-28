import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Games from '../../scenes/Games';
import Guide from '../../scenes/Guide';

const MainStack = createStackNavigator({
  games: { screen: Games },
  guide: { screen: Guide }
});

const RouteApp = createSwitchNavigator({
  app: { screen: MainStack }
});

export { RouteApp };