import { combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload }
    case "CHAGE_ID":
      return {
        ...state,
        id: actions.data.id,
      };
    case "CLEAR":
      return null;
    default:
      return state;      
  }
};

const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case "CHANGE":
      return action.data;
    case "CLEAR":
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  user: userReducer,
  token: tokenReducer
})
