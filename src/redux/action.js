import { storeToken, removeToken } from '../service/storage/Token';

const changeToken = (data) => {
  data ? storeToken(data) : null;
  console.log('storing to redux')
  return {
    type: 'CHAGE',
    data: data
  };
};

const clearToken = () => {
  removeToken();
  return {
    type: 'CLEAR',
  };
};

const setUser = (user) => {
  return {
    type: 'SET_ID',
    data: user
  };
};



export {changeToken, storeToken, setUser, clearToken};