import React from 'react';
import { StyleSheet, View } from 'react-native';
import FirstFB from './src/elements/FirstFB';

class App extends React.Component {
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerrow: {
    flexDirection: 'row',
  },
});

export default App;
