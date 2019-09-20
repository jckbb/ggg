import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  children: string
};

class Title extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return(
      <View style={styles.container}>
        <Text style={styles.content}>{children}</Text>
      </View>
    );
  }
}

export default Title;