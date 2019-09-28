import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle,
  headerContainer: ViewStyle
};

const BACKGROUND_COLOR = '#ebebeb';

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 80,
    paddingBottom: 5,
    justifyContent: 'flex-end'
  }
});