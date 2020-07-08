import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Button extends React.Component {
  render() {
    return (
      <View style={styles.button}>
        <Text style={styles.button_text}>button</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // buttonのスタイル グラデーションを付けたい。
  button: {
    position: 'absolute',
    bottom: 10,
    width: 75,
    height: 30,
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
    fontSize: 15,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default Button;
