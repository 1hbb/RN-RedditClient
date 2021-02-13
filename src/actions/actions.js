/*import axios from 'axios';

//actions

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

const FETCH_ABOUT_SUBREDDİT_REQUEST = 'FETCH_ABOUT_SUBREDDİT_REQUEST';
const FETCH_ABOUT_SUBREDDİT_SUCCESS = 'FETCH_ABOUT_SUBREDDİT_SUCCESS';
const FETCH_ABOUT_SUBREDDİT_FAILURE = 'FETCH_ABOUT_SUBREDDİT_FAILURE';

//login action creator
const userLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};

const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

// About subreddit&user action creator

const fetchAboutSubredditRequest = () => {
  return {
    type: FETCH_ABOUT_SUBREDDİT_REQUEST,
  };
};

const fetchAboutSubredditSuccess = (data) => {
  return {
    type: FETCH_ABOUT_SUBREDDİT_SUCCESS,
    payload: data,
  };
};

const fetchAboutSubredditFailure = (error) => {
  return {
    type: FETCH_ABOUT_SUBREDDİT_FAILURE,
    payload: error,
  };
};

const handleLogin = (data) => {
  return (dispatch) => {
    dispatch(userLogin(data));
  };
};

const fetchAboutSubreddit = (subreddit_name_prefixed) => {
  return (dispatch) => {
    dispatch(fetchAboutSubredditRequest());
    fetch(`https://www.reddit.com/${subreddit_name_prefixed}/about.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const data = res;
        dispatch(fetchAboutSubredditSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchAboutSubredditFailure(error));
      });
  };
};

export {
  fetchAboutSubredditFailure,
  fetchAboutSubredditSuccess,
  fetchAboutSubredditRequest,
  FETCH_ABOUT_SUBREDDİT_FAILURE,
  FETCH_ABOUT_SUBREDDİT_SUCCESS,
  FETCH_ABOUT_SUBREDDİT_REQUEST,
  fetchAboutSubreddit,
};
 */
