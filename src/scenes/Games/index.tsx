import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import CategoryList from '../../components/CategoryList';
import { NavigationActions } from 'react-navigation';
import { selectGames } from 'services/firebase/guide/selectors';
import { ApplicationState } from 'store';
import styles from './styles';
import { fetchGuide } from 'services/firebase/guide/actions';
import { Dispatch } from 'redux';

interface Props {
  navigation: typeof NavigationActions,
  gameList: string[],
  getGuide: typeof fetchGuide.request,
};

class Games extends React.Component<Props> {
  static navigationOptions = {
    title: 'Games'
  };

  constructor(props: Props) {
    super(props);

    this.handleSelectChanged = this.handleSelectChanged.bind(this);
  }

  componentDidMount() {
    this.props.getGuide();
  }

  handleSelectChanged(index: number) {
    const gamePicked = this.props.gameList[index];

    this.props.navigation.navigate({
      routeName: 'guide',
      params: {
        title: gamePicked
      }
    });
  }

  render() {
    const { gameList } = this.props;

    return(
      <View style={styles.container}>
        <CategoryList
          data={gameList}
          onItemSelect={this.handleSelectChanged}/>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  gameList: selectGames(state)
});

const mapDisaptchToProps = (dispatch: Dispatch) => ({
  getGuide: () => dispatch(fetchGuide.request())
});

export default connect(mapStateToProps, mapDisaptchToProps)(Games);