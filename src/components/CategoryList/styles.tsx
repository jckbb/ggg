import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  list: ViewStyle,
  itemSeparator: ViewStyle
};

export default StyleSheet.create<Styles>({
  list: {
    flex: 1
  },
  itemSeparator: {
    height: 0.3,
    backgroundColor: '#3d3d3d'
  }
});