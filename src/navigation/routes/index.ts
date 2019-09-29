import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Games from '../../scenes/Games';
import Guide from '../../scenes/Guide';
import Guides from '../../scenes/Guides';

const MainStack = createStackNavigator({
  games: { screen: Games },
  guides: {
    screen: Guides,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title')
    })
  },
  guide: {
    screen: Guide,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('title')
    })
  },
});

const RouteApp = createSwitchNavigator({
  app: { screen: MainStack }
});

export { RouteApp };