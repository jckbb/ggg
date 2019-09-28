import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Styles {
  container: ViewStyle,
  content: TextStyle,
};

export const STEP_HEIGHT_MAX = 250;
export const STEP_HEIGHT_MIN = 55;
export const ANIMATE_DURATION_FAST = 250;
export const OPACITY_DEFAULT = 1;
export const OPACITY_LIGHT = 0.3;

const BACKGROUND_COLOR = '#FFFFFF';
const ON_BACKGROUND_COLOR = '#333';

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 10
  },
  content: {
    color: ON_BACKGROUND_COLOR,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.3,
    lineHeight: 30,
  }
});