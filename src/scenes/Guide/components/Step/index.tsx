import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles, {
  OPACITY_DEFAULT,
  OPACITY_LIGHT
} from './styles';

interface Props {
  onComplete(): void,
  currentIndex: number,
  isComplete: boolean,
  index: number,
  data: string,
};

class Step extends React.PureComponent<Props> {
  render() {
    const { index, currentIndex, data, onComplete, isComplete } = this.props;
    const itemHeight = currentIndex != index ? {height: 55} : undefined;
    const stepOpacity = isComplete ? OPACITY_LIGHT : OPACITY_DEFAULT;

    return(
      <TouchableWithoutFeedback
        disabled={isComplete}
        onPress={onComplete}>
        <View style={[
          styles.container,
          itemHeight,
          {
            opacity: stepOpacity
          }]}>
          <Text /*ellipsizeMode={'tail'} numberOfLines={1}*/ style={styles.content}>{data}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Step;