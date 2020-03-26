import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class FirstFB extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Sub_container1}>
          <View style={styles.container_row1}>
            <TextInput style={styles.row_Text} placeholder="text" />
          </View>
          <View style={styles.container_row2}>
            <TextInput style={styles.row_Text} placeholder="text" />
          </View>
          <View style={styles.container_row3}>
            <TextInput style={styles.row_Text} placeholder="text" />
          </View>
        </View>
        <View style={styles.Sub_container2}>
          <View style={styles.container_row4}>
            <TextInput style={styles.row_Text} placeholder="text" />
          </View>
          <View style={styles.container_row5}>
            <TextInput style={styles.row_Text} placeholder="text" />
          </View>
          <View style={styles.container_row6}>
            <TextInput style={styles.row_Text} placeholder="text" />
          </View>
        </View>
      </View>
    );
  }
}

// マスのスタイル調整
const styles = StyleSheet.create({
  container: {
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
  Sub_container1: {
    flexDirection: 'row',
  },
  Sub_container2: {
    flexDirection: 'row',
  },
  row_Text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  container_row1: {
    width: 120,
    height: 120,
    backgroundColor: '#efefef',
    justifyContent: 'center',
  },
  container_row2: {
    width: 120,
    height: 120,
    backgroundColor: '#99CCFF',
    justifyContent: 'center',
  },
  container_row3: {
    width: 120,
    height: 120,
    backgroundColor: '#9999FF',
    justifyContent: 'center',
  },
  container_row4: {
    width: 120,
    height: 120,
    backgroundColor: '#CCFFCC',
    justifyContent: 'center',
  },
  container_row5: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFF66',
    justifyContent: 'center',
  },
  container_row6: {
    width: 120,
    height: 120,
    backgroundColor: '#FFCCFF',
    justifyContent: 'center',
  },
});

export default FirstFB;
