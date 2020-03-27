import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FirstFB from './src/elements/FirstFB';
import { LinearGradient } from 'expo-linear-gradient';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_text}>9smiles test</Text>
        </View>
        <FirstFB />
        <View style={styles.button}>
          <Text style={styles.button_text}>button</Text>
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
    backgroundColor: '#efefef',
  },

  // タイトル
  title: {
    top: 100,
  },
  title_text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'System',
  },

  // buttonのスタイル グラデーションを付けたい。
  button: {
    position: 'absolute',
    bottom: 100,
    width: 100,
    height: 50,
    backgroundColor: '#00BFFF',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  button_text: {
    fontSize: 25,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
