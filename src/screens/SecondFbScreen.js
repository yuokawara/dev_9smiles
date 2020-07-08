import React from 'react';
import { View } from 'react-native';
import AppBar from '../components/AppBar';
import SecondFB from '../components/SecondFB';


class SecondFbScreen extends React.Component {
  render() {
    return (
      <View>
        <AppBar />
        <SecondFB />
      </View>
    );
  }
}

export default SecondFbScreen;
