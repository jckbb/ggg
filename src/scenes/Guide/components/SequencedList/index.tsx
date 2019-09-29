import React from 'react';
import { FlatList, View, LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import styles, {
  ITEM_SEPARATOR_HEIGHT,
  ITEM_HEIGHT_DEFAULT
} from './styles';
import Step from '../Step';
import HoverButton from 'components/HoverButton';

interface Props {
  data: string[],
  currentStep: number,
  onCurrentIndexChanged(currentIndex: number): void
};

interface State {
  listHeight: number,
  showRecenterButton: boolean,
  recenterCurrentItem: boolean,
  currentItemLocation: string
};

let listRef: FlatList<string>;

class SequencedList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.updateScrollPos = this.updateScrollPos.bind(this);
    this.handleMomentumScrollEnd = this.handleMomentumScrollEnd.bind(this);
    this.handleScrollEndDrag = this.handleScrollEndDrag.bind(this);
    this.checkOffsetState = this.checkOffsetState.bind(this);
    
    this.state = {
      listHeight: 0,
      showRecenterButton: false,
      recenterCurrentItem: false,
      currentItemLocation: 'center'
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { currentStep, data } = this.props;

    if(data.length === 0)
      return;
    
    if(currentStep === prevProps.currentStep 
      || (prevState.recenterCurrentItem != this.state.recenterCurrentItem && !this.state.recenterCurrentItem))
      return;

    this.updateScrollPos(currentStep);
  }

  updateScrollPos(currentStep: number) {
    listRef.scrollToIndex({
      animated: true,
      index: currentStep,
      viewOffset: undefined,
      viewPosition: undefined
    });
  }

  renderItem({ item, index }: { item: string, index: number }) {
    const { currentStep } = this.props;

    return(
      <Step
        index={index}
        currentIndex={currentStep}
        data={item}
        isComplete={index < currentStep}
        onComplete={this.handleComplete}/>
    );
  }

  handleComplete() {
    const { currentStep } = this.props;
    this.props.onCurrentIndexChanged(currentStep + 1);
  }

  checkOffsetState(offset: number) {
    const currentOffset = this.props.currentStep * ( 55 + 10 );
    let shouldRecenterToCurrentItem = false;
    let currentItemLocation = 'above';

    if(offset > (currentOffset + 55) || offset < currentOffset) {
      shouldRecenterToCurrentItem = true;
      
      if(offset < currentOffset)
        currentItemLocation = 'below';
    }

    this.setState({
      showRecenterButton: shouldRecenterToCurrentItem,
      currentItemLocation: currentItemLocation
    });
  }

  // Show recenter button if current item is not visible after scrolling stops
  handleMomentumScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrolledToOffset = e.nativeEvent.contentOffset.y;
    this.checkOffsetState(scrolledToOffset);
  }

  // Show recenter button if current item is not visible after scrolling stops
  handleScrollEndDrag(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrolledToOffset = e.nativeEvent.contentOffset.y;
    this.checkOffsetState(scrolledToOffset);
  }

  render() {
    const { currentStep, data } = this.props;
    const { showRecenterButton, currentItemLocation } = this.state;
    const iconType = currentItemLocation === 'above' ? 'up' : 'down';

    return(
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          ref={(list: FlatList<string>) => {
            listRef = list;
          }}
          onLayout={(e: LayoutChangeEvent) => {
            this.setState({
              listHeight: e.nativeEvent.layout.height
            });
          }}
          initialScrollIndex={this.props.currentStep}
          getItemLayout={(__, index) => ({
            length: ITEM_HEIGHT_DEFAULT,
            offset: ( ITEM_SEPARATOR_HEIGHT + ITEM_HEIGHT_DEFAULT ) * index,
            index
          })}
          onMomentumScrollEnd={this.handleMomentumScrollEnd}
          onScrollEndDrag={this.handleScrollEndDrag}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={() => <View style={styles.stepSeparator}/>}
          keyExtractor={(__: any, index: number) => index.toString()}/>
        {showRecenterButton &&
          <HoverButton
            onPress={() => {
              this.updateScrollPos(currentStep);
            }}
            iconType={iconType}
            label={this.props.currentStep.toString()} />}
      </View>
    );
  }
}

export default SequencedList;