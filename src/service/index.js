import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (error) {
      console.log(error)
    }
}

export default storeToken;