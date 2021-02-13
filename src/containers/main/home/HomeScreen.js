import React from 'react';

import {connect} from 'react-redux';
import LoginWarningScreen from '../../../shared/Login/LoginWarningScreen';

import PostsFlatlist from './PostsFlatlist';

const HomeScreen = ({dataJson, isLogged, error}) => {
  return dataJson.length !== 0 && isLogged == true ? (
    <PostsFlatlist />
  ) : (
    <LoginWarningScreen />
  );
};

const mapStateToProps = (state) => {
  return {
    dataJson: state.mainFeedData.data,
    error: state.mainFeedData.error,
    isLogged: state.login.isLogged,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
