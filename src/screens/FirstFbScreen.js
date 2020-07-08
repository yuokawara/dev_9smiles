import React from 'react';

import { View, StyleSheet } from 'react-native';
import FirstFB from '../components/FirstFB';


class FirstFbScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FirstFB />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default FirstFbScreen;
