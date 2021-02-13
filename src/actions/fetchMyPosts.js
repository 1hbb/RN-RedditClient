import axios from 'axios';

//actions
const FETCH_MY_POSTS_REQUEST = 'FETCH_MY_POSTS_USER_REQUEST';
const FETCH_MY_POSTS_SUCCESS = 'FETCH_MY_POSTS_SUCCESS';
const FETCH_MY_POSTS_FAILURE = 'FETCH_MY_POSTS_FAILURE';
const FETCH_MY_POSTS_SUCCESS_REFRESH = 'FETCH_MY_POSTS_SUCCESS_REFRESH';

//action creators

const fetchMyPostsRequest = () => {
  return {
    type: FETCH_MY_POSTS_REQUEST,
  };
};

const fetchMyPostsSuccess = (data, afterKey) => {
  return {
    type: FETCH_MY_POSTS_SUCCESS,
    payload: data,
    after: afterKey,
  };
};

const fetchMyPostsSuccessRefresh = (data, afterKey) => {
  return {
    type: FETCH_MY_POSTS_SUCCESS_REFRESH,
    payload: data,
    after: afterKey,
  };
};

const fetchMyPostsFailure = (error) => {
  return {
    type: FETCH_MY_POSTS_FAILURE,
    payload: error,
  };
};

// async api request with redux-thunk
const fetchMyPostsData = (token, user) => {
  return (dispatch) => {
    dispatch(fetchMyPostsRequest());
    axios
      .get(`https://oauth.reddit.com/user/${user}?raw_json=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const data = res.data.children;
        dispatch(fetchMyPostsSuccessRefresh(data, res.data.after));
      })
      .catch((error) => {
        dispatch(fetchMyPostsFailure(error));
      });
  };
};

const fetchMyPostsDataNextPage = (afterKey, token, user) => {
  return (dispatch) => {
    dispatch(fetchMyPostsRequest());
    axios
      .get(
        `https://oauth.reddit.com/user/${user}/?raw_json=1&after=${afterKey}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const data = res.data.children;
        dispatch(fetchMyPostsSuccess(data, res.data.after));
      })
      .catch((error) => {
        dispatch(fetchMyPostsFailure(error));
      });
  };
};

export {
  FETCH_MY_POSTS_REQUEST,
  FETCH_MY_POSTS_SUCCESS,
  FETCH_MY_POSTS_SUCCESS_REFRESH,
  FETCH_MY_POSTS_FAILURE,
  fetchMyPostsRequest,
  fetchMyPostsSuccess,
  fetchMyPostsSuccessRefresh,
  fetchMyPostsFailure,
  fetchMyPostsData,
  fetchMyPostsDataNextPage,
};
