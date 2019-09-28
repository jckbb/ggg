import React from 'react';
import { FlatList, View } from 'react-native';
import Item from './components/Item';
import styles from './styles';

interface Props {
  data: string[],
  onItemSelect(index: number): void
};

class CategoryList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({item, index}: { item: any, index: number }) {
    return(
      <Item
        data={item}
        onPress={() => {
          this.props.onItemSelect(index);
        }}/>
    );
  }

  render() {
    const { data } = this.props;

    return(
      <FlatList
        style={styles.list}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(__, index: number) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}/>
    );
  }
}

export default CategoryList;