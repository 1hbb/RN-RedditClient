//actions

const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';

//login action creator
const userLogin = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};
//logout action creator
const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

const handleLogin = (data) => {
  return (dispatch) => {
    dispatch(userLogin(data));
  };
};

const handleLogout = () => {
  return (dispatch) => {
    dispatch(userLogout());
  };
};

export {
  userLogin,
  USER_LOGIN,
  USER_LOGOUT,
  userLogout,
  handleLogin,
  handleLogout,
};
