import AsyncStorage from "@react-native-async-storage/async-storage"

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (e) {
    console.log(e);
  }
};

const storeGetStarted = async () => {
  try {
    await AsyncStorage.setItem('getStarted', true);
  } catch (e) {
    console.log(e);
  };
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.log(e);
  };
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Done, delete token')
  } catch (e) {
    console.log(e);
  }
}

export {storeToken, storeGetStarted, getToken, removeToken};