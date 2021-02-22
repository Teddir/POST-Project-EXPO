import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (error) {
      console.log(error)
    }
}

const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch (error) {
      console.log(error)
    }
}
export default {storeToken, removeToken};