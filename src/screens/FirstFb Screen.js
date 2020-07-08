import React from 'react';
import { View } from 'react-native';
import AppBar from '../components/AppBar';
import FirstFB from '../components/FirstFB';


class FirstFbScreen extends React.Component {
  render() {
    return (
      <View>
        <AppBar />
        <FirstFB />
      </View>
    );
  }
}

export default FirstFbScreen;
