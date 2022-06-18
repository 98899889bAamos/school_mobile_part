import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './Routes/AppNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);
const App = () => {
  return <AppNavigator />;
};
export default App;
