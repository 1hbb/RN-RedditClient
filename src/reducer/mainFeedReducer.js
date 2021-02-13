import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS_REFRESH,
} from '../actions/fetchMainfeedAction';

//initial state

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: null,
};

//reducers

const mainFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload),
        after: action.after,
        error: '',
      };
    case FETCH_USER_SUCCESS_REFRESH:
      return {
        ...state,
        loading: false,
        data: action.payload,
        after: action.after,
        error: '',
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default mainFeedReducer;
