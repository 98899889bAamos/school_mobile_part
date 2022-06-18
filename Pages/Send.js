import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function Send() {
  const [message, setMessage] = useState('');
  const handleSend = async () => {
    const formData = new FormData();
    formData.append('p_number', message);
    let result = await fetch(
      'https://www.amosbilly.co.ke/school_project/public/api/notify',
      {
        method: 'POST',
        body: formData,
      }
    );
    console.log('Data has been sent successfully');
    AsyncStorage.removeItem('appData');
    Navigation.navigate('Scan');
    console.log('Done');
    console.log(message);
  }
  const getNumber = async () => {
    try {
      const number = await AsyncStorage.getItem('appData');
      setMessage(number);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getNumber();
  }, []);
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container6}>
      <TextInput
        name="p_number"
        placeholder="Number"
        style={styles.inputTaggy}
        value={message}
        onChangeText={e => setMessage(e.target.value)}
      />
      <TouchableOpacity style={styles.really} onPress={handleSend}>
        <Text style={styles.sender}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container6: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTaggy: {
    color: '#0071f3',
    width: 250,
    height: 50,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  really: {
    backgroundColor: '#0071f3',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
    borderRadius: 5,
  },
  sender: {
    color: '#fff',
  },
});
export default Send;