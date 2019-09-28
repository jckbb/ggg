import React from 'react';
import { View } from 'react-native';
import SequencedList from './components/SequencedList';
import styles from './styles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'store';
import { changeCurrentStep, fetchCurrentStep } from './data/guide/actions';
import { GuideState } from './data/guide/types';
import Title from 'components/Title';
import Subtitle from 'components/Subtitle';
import { selectBasicGuide } from 'services/firebase/guide/selectors';
import { BasicGuide as GuideData } from 'services/firebase/guide/types';
import { NavigationState, NavigationActions } from 'react-navigation';

interface PropsFromState {
  guide: GuideState,
  data: GuideData,
  guideIds: string[]
};

interface PropsFromDispatch {
  changeCurrentStep: typeof changeCurrentStep,
  getCurrentStep: typeof fetchCurrentStep,
};

interface Props {
  navigation: any
};

type AllProps = Props & PropsFromDispatch & PropsFromState;

interface State {
  isCurrentItemOffscreen: boolean,
};

class Guide extends React.Component<AllProps, State> {
  static navigationOptions = {
    title: 'Guide'
  };

  constructor(props: AllProps) {
    super(props);

    this.handleRestart = this.handleRestart.bind(this);
    this.handleCurrentIndexChanged = this.handleCurrentIndexChanged.bind(this);

    this.state = {
      isCurrentItemOffscreen: false
    };
  }

  componentDidMount() {
    this.props.getCurrentStep();
  }

  handleCurrentIndexChanged(currentIndex: number) {
    this.props.changeCurrentStep(currentIndex);
  }
  
  handleRestart() {
    this.props.changeCurrentStep(0);
  }

  render() {
    const { currentStep } = this.props.guide;
    const { steps, title } = this.props.data;
    const isComplete = currentStep >= steps.length;
    const subtitleContent = !isComplete
      ? `${currentStep + 1} of ${steps.length}`
      : 'completed';

    if(currentStep === 0)
      console.log(currentStep);

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Title>{title}</Title>
          <Subtitle>{subtitleContent}</Subtitle>
        </View>
        <SequencedList
          data={steps}
          currentStep={currentStep}
          onCurrentIndexChanged={this.handleCurrentIndexChanged}/>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  data: selectBasicGuide(state, '3VguUABwGFKy0634eIwV'),
  guideIds: state.firebase.allIds,
  guide: state.guide
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCurrentStep: (nextStep: number) => dispatch(changeCurrentStep(nextStep)),
  getCurrentStep: () => dispatch(fetchCurrentStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guide);
