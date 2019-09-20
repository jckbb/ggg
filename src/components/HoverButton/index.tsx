import React from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { UpOutline, DownOutline } from "@ant-design/icons-svg";
import { SvgXml } from 'react-native-svg';
import { renderIconDefinitionToSVGElement } from "@ant-design/icons-svg/lib/helpers";
import styles, { ICON_FILL_COLOR } from './styles';

interface Props {
  onPress(): void,
  label: string,
  isHidden?: boolean,
  iconType: string
};

interface State {
  animatedSizeValue: Animated.Value,
  showIcon: boolean
};

const svgHTMLStringForUp = renderIconDefinitionToSVGElement(UpOutline, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: ICON_FILL_COLOR }
});

const svgHTMLStringForDown = renderIconDefinitionToSVGElement(DownOutline, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: ICON_FILL_COLOR }
});

class HoverButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.animateSize = this.animateSize.bind(this);
    
    this.state = {
      animatedSizeValue: new Animated.Value(0),
      showIcon: false
    }
  }

  componentDidMount() {
    this.animateSize();
  }

  animateSize() {
    return Animated.spring(this.state.animatedSizeValue, {
      toValue: 1,
      useNativeDriver: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
    }).start(() => {
      this.setState({
        showIcon: true
      });
    });
  }

  render() {
    const {
      animatedSizeValue,
      showIcon
    } = this.state;
    const { onPress, iconType } = this.props;
    const svgHTMLString = iconType === 'up' 
      ? svgHTMLStringForUp
      : svgHTMLStringForDown;

    return(
      <TouchableWithoutFeedback
        onPress={onPress}>
        <Animated.View
          style={[styles.button, {
            transform: [{
              scale: animatedSizeValue
            }]
          }]}>
          {showIcon &&
            <SvgXml
              xml={svgHTMLString}
              width={'45%'}
              height={'45%'} />}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

export default HoverButton;