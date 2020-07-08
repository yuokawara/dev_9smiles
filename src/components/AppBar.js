import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// titleを入れるバー
class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_text}>9smiles test</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  // タイトル
  title_text: {
    top: 50,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'System',
  },


});

export default AppBar;
