import {
  FETCH_MY_POSTS_FAILURE,
  FETCH_MY_POSTS_REQUEST,
  FETCH_MY_POSTS_SUCCESS,
  FETCH_MY_POSTS_SUCCESS_REFRESH,
} from '../actions/fetchMyPosts';

//initial state

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: null,
};

//reducers

const fetchMyPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MY_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload),
        after: action.after,
        error: '',
      };
    case FETCH_MY_POSTS_SUCCESS_REFRESH:
      return {
        ...state,
        loading: false,
        data: action.payload,
        after: action.after,
        error: '',
      };
    case FETCH_MY_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchMyPostsReducer;
