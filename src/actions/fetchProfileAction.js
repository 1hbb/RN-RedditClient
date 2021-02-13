import axios from 'axios';

//actions

const FETCH_ABOUT_USER_REQUEST = 'FETCH_ABOUT_USER_REQUEST';
const FETCH_ABOUT_USER_SUCCESS = 'FETCH_ABOUT_USER_SUCCES';
const FETCH_ABOUT_USER_FAILURE = ' FETCH_ABOUT_USER_FAILURE';

//action creators

const fetchAboutUserRequest = () => {
  return {
    type: FETCH_ABOUT_USER_REQUEST,
  };
};

const fetchAboutUserSuccess = (data) => {
  return {
    type: FETCH_ABOUT_USER_SUCCESS,
    payload: data,
  };
};

const fetchAboutUserFailure = (error) => {
  return {
    type: FETCH_ABOUT_USER_FAILURE,
    payload: error,
  };
};

// async api request with redux-thunk
const fetchAboutUserData = (token) => {
  return (dispatch) => {
    dispatch(fetchAboutUserRequest());
    axios
      .get(`https://oauth.reddit.com/api/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const data = res;
        dispatch(fetchAboutUserSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAboutUserFailure(error));
      });
  };
};

export {
  FETCH_ABOUT_USER_REQUEST,
  FETCH_ABOUT_USER_SUCCESS,
  FETCH_ABOUT_USER_FAILURE,
  fetchAboutUserRequest,
  fetchAboutUserSuccess,
  fetchAboutUserFailure,
  fetchAboutUserData,
};
