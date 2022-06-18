import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../Pages/Welcome';
import Scan from '../Pages/Scan';
import Send from '../Pages/Send';
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Send" component={Send} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
