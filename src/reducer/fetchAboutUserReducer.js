import {
  FETCH_ABOUT_USER_FAILURE,
  FETCH_ABOUT_USER_REQUEST,
  FETCH_ABOUT_USER_SUCCESS,
} from '../actions/fetchProfileAction';

// initial state
const initialState = {
  loading: false,
  data: [],
  error: '',
};

//reducer

const AboutUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ABOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ABOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AboutUserReducer;
