import React from 'react';
import { View } from 'react-native';
import CategoryList from '../../components/CategoryList';
import styles from './styles';
import { NavigationState, NavigationScreenProp, NavigationParams } from 'react-navigation';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { selectGuideNames, selectGuideIds } from 'services/firebase/guide/selectors';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  guideNames: string[],
  guideIds: string[]
};

class Guides extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleSelectChanged = this.handleSelectChanged.bind(this);
  }

  handleSelectChanged(index: number) {
    const { guideIds, guideNames } = this.props;

    this.props.navigation.navigate({
      routeName: 'guide',
      params: {
        id: guideIds[index],
        title: guideNames[index]
      }
    });
  }

  render() {
    const { guideNames } = this.props;

    return(
      <View style={styles.container}>
        <CategoryList
          data={guideNames}
          onItemSelect={this.handleSelectChanged}/>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  guideNames: selectGuideNames(state),
  guideIds: selectGuideIds(state)
});

export default connect(mapStateToProps)(Guides);