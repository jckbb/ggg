import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  list: ViewStyle,
  itemContainer: ViewStyle,
  stepSeparator: ViewStyle,
  container: ViewStyle
};

export const ITEM_SEPARATOR_HEIGHT = 10;
export const ITEM_HEIGHT_DEFAULT = 55;

export default StyleSheet.create<Styles>({
  list: {
    flex: 1,
    paddingVertical: 10
  },
  itemContainer: {},
  stepSeparator: {
    height: 10
  },
  container: {
    flex: 1
  }
});