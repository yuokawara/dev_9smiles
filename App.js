import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FirstFB from './src/components/FirstFB';
import Button from './src/elements/Button';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
        <View style={styles.title}>
          <Text style={styles.title_text}>9smiles test</Text>
        </View>
        <FirstFB />
        <Button />
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

  // タイトル
  title: {
    top: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'System',
  },


});

export default App;
