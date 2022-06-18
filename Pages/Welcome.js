import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function Welcome() {
  const Navigation = useNavigation();
  return (
    <View style={styles.welcomeContainer}>
      <TouchableOpacity
        styles={styles.containWelcome}
        onPress={() => Navigation.navigate('Scan')}>
        <ImageBackground
          style={styles.bg}
          source={require('../assets/background.png')}
        />
        <Text>Start Scanning</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    height: 80,
    width: 80,
  },
  containWelcome: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Welcome;