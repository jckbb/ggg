import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  button: ViewStyle
};

export const ICON_FILL_COLOR = '#FFFFFF';
const buttonDimension = 65;

export default StyleSheet.create<Styles>({
  button: {
    backgroundColor: '#74b9ff',
    height: buttonDimension,
    width: buttonDimension,
    borderRadius: buttonDimension / 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 25,
    bottom: 50
  }
});
