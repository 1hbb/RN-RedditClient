import axios from 'axios';

//actions
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
const FETCH_USER_SUCCESS_REFRESH = 'FETCH_USER_SUCCESS_REFRESH';

//action creators

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (data, afterKey) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
    after: afterKey,
  };
};

const fetchUserSuccessRefresh = (data, afterKey) => {
  return {
    type: FETCH_USER_SUCCESS_REFRESH,
    payload: data,
    after: afterKey,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

// async api request with redux-thunk
const fetchData = (token) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get(`https://oauth.reddit.com/?raw_json=1`, {
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
        /*
        var multipleData = [];
        list == null
          ? (multipleData = data)
          : (multipleData = list.concat(data));
        //console.log('multiple dataa: ', multipleData);
        */
        //dispatch(fetchUserSuccess(data, res.data.after));
        dispatch(fetchUserSuccessRefresh(data, res.data.after));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

const fetchDataNextPage = (afterKey, token) => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get(`https://oauth.reddit.com/?raw_json=1&after=${afterKey}`, {
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
        /*
        var multipleData = [];
        list == null
          ? (multipleData = data)
          : (multipleData = list.concat(data));
        //console.log('multiple dataa: ', multipleData);
        */
        dispatch(fetchUserSuccess(data, res.data.after));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error));
      });
  };
};

export {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  fetchData,
  fetchDataNextPage,
  fetchUserSuccessRefresh,
  FETCH_USER_SUCCESS_REFRESH,
};
