import {USER_LOGIN, USER_LOGOUT} from '../actions/userLoginAction';

//initial state
const initialLoginState = {
  isLogged: false,
  accesToken: '',
};

//reducers

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
        accesToken: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
        accesToken: '',
      };
    default:
      return state;
  }
};

export default loginReducer;
