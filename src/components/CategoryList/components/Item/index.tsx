import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './styles';

interface Props {
  data: string,
  onPress(): void
};

class Item extends React.Component<Props> {
  render() {
    const { data, onPress } = this.props;

    return(
      <TouchableWithoutFeedback
        onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.content}>{data}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Item;
