import React from 'react';
import { StyleSheet, View } from 'react-native';
import FirstFbScreen from './src/screens/FirstFb Screen';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FirstFbScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98FB98',
  },
});

export default App;
