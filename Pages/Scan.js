import React, {useState, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';

const Scan = () => {
  const Navigation = useNavigation();
  const qrcodeRef = useRef(null);
  const [link, setLink] = useState('');

  const handleScan = data => {
    setLink(data.data);
  };

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('appData', link)
    } catch (e) {
      console.log(e);
    }
    setLink('');
    qrcodeRef.current.reactivate();
    Navigation.navigate('Send')
  };
  return (
    <SafeAreaView style={styles.wholeContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.centerText}>{link ? <>Got it!</> : ''}</Text>
      </View>
      <View style={styles.ViewQr}>
        <QRCodeScanner
          ref={qrcodeRef}
          onRead={handleScan}
          flasMode={RNCamera.Constants.FlashMode.off}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          type="submit"
          onPress={handleSubmit}>
          <Text style={styles.randa}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    color: 'blue',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  buttonTouchable: {
    padding: 8,
    width: 80,
    height: 40,
    backgroundColor: '#0071f3',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wholeContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ViewQr: {
    flex: 5,
    width: '100%',
    height: '100%',
  },
  topContainer: {
    flex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  randa: {
    color: '#fff',
  },
});
export default Scan;
