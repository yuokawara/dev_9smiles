import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Sample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>test</Text>
      </View>
    );
  }
}

// マスのスタイル調整
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sample;
