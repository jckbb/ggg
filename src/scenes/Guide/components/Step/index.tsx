import React from 'react';
import { Text, TouchableWithoutFeedback, Animated } from 'react-native';
import styles, {
  STEP_HEIGHT_MIN,
  STEP_HEIGHT_MAX,
  ANIMATE_DURATION_FAST,
  OPACITY_DEFAULT,
  OPACITY_LIGHT
} from './styles';

interface Props {
  onComplete(): void,
  currentIndex: number,
  index: number,
  data: string,
};

interface State {
  animatedValue: Animated.Value,
  animatedOpacityValue: Animated.Value,
};

class Step extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.animatedStep = this.animatedStep.bind(this);

    this.state = {
      animatedValue: new Animated.Value(STEP_HEIGHT_MIN),
      animatedOpacityValue: new Animated.Value(OPACITY_DEFAULT),
    };
  }

  componentDidMount() {
    const { currentIndex, index } = this.props;

    if(currentIndex === index)
      this.animatedStep(true);
    else if(index < currentIndex)
      this.setState({
        animatedOpacityValue: new Animated.Value(OPACITY_LIGHT),
      });
  }

  componentDidUpdate(prevProps: Props) {
    if(prevProps.currentIndex != this.props.currentIndex 
      && this.props.index === this.props.currentIndex)
      this.animatedStep(true);
    else if (prevProps.currentIndex != this.props.currentIndex 
      && this.props.index === prevProps.currentIndex)
      this.animatedStep(false);
  }

  animatedStep(isCurrent: boolean) {
    const animateOpacityValue = isCurrent
      ? OPACITY_DEFAULT
      : OPACITY_LIGHT;

      Animated.timing(this.state.animatedOpacityValue, {
        toValue: animateOpacityValue,
        duration: ANIMATE_DURATION_FAST
      }).start();
  }

  render() {
    const { index, currentIndex, data, onComplete } = this.props;
    const { animatedOpacityValue } = this.state;
    const itemHeight = currentIndex != index ? {height: 55} : undefined;

    return(
      <TouchableWithoutFeedback
        disabled={index != currentIndex}
        onPress={onComplete}>
        <Animated.View style={[
          styles.container,
          itemHeight,
          {
            opacity: animatedOpacityValue
          }]}>
          <Text /*ellipsizeMode={'tail'} numberOfLines={1}*/ style={styles.content}>{data}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Step;