const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, ...action.payload }
    case "CHAGE/TOKEN":
      return action.data;
    default:
      return state;      
  }
}


export default reducer
