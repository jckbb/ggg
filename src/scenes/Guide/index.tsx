import React from 'react';
import { View } from 'react-native';
import SequencedList from './components/SequencedList';
import styles from './styles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'store';
import { changeCurrentStep, fetchCurrentStep } from './data/guide/actions';
import { GuideState } from './data/guide/types';
import { selectBasicGuide } from 'services/firebase/guide/selectors';
import { BasicGuide as GuideData } from 'services/firebase/guide/types';
import { NavigationParams, NavigationScreenProp } from 'react-navigation';
import { NavigationState } from 'react-navigation';

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
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
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
    const { steps } = this.props.data;

    return (
      <View style={styles.container}>
        <SequencedList
          data={steps}
          currentStep={currentStep}
          onCurrentIndexChanged={this.handleCurrentIndexChanged}/>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState, props: AllProps) => ({
  data: selectBasicGuide(state, props.navigation.getParam('id')),
  guideIds: state.firebase.allIds,
  guide: state.guide
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCurrentStep: (nextStep: number) => dispatch(changeCurrentStep(nextStep)),
  getCurrentStep: () => dispatch(fetchCurrentStep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guide);
