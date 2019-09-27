import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle,
  content: TextStyle
};

const ITEM_HEIGHT = 85;

export default StyleSheet.create<Styles>({
  container: {
    height: ITEM_HEIGHT,
    padding: 10,
    justifyContent: 'center'
  },
  content: {
    fontSize: 25,
    fontWeight: '500',
    letterSpacing: 0.8
  }
});