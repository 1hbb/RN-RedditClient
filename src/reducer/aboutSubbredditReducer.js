import {
  FETCH_ABOUT_SUBREDDİT_FAILURE,
  FETCH_ABOUT_SUBREDDİT_SUCCESS,
  FETCH_ABOUT_SUBREDDİT_REQUEST,
} from '../actions/actions';

// initial state
const initialState = {
  loading: false,
  data: [],
  error: '',
};

//reducer

const AboutSubredditReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABOUT_SUBREDDİT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ABOUT_SUBREDDİT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ABOUT_SUBREDDİT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AboutSubredditReducer;
