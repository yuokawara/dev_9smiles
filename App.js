// eslint-disable-next-line import/extensions
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FirstFbScreen from './src/screens/FirstFbScreen';


const App = createStackNavigator({
  Home: {
    screen: FirstFbScreen,
    navigationOptions: {
      headerTitle: '9smile_test',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
        color: '#efefef',
      },
    },
  },
});


export default createAppContainer(App);
