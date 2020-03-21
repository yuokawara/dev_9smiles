import React from 'react';
import { StyleSheet, View } from 'react-native';
import Sample from './src/elements/Sample';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerrow}>
          <Sample />
          <Sample />
          <Sample />
        </View>
        <View style={styles.containerrow}>
          <Sample />
          <Sample />
          <Sample />
        </View>
        <View style={styles.containerrow}>
          <Sample />
          <Sample />
          <Sample />
        </View>
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
