import {Button, View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {connect} from 'react-redux';
import React from 'react';
import {handleLogin, handleLogout} from '../../actions/userLoginAction';
import {fetchData} from '../../actions/fetchMainfeedAction';
import {fetchAboutUserData} from '../../actions/fetchProfileAction';

function UserLogin({
  isLogged,
  TokenFromRedux,
  userLogin,
  fetchDataFromApi,
  userLogout,
  fetchAboutUser,
}) {
  const config = {
    redirectUrl: 'com.myapp://oauth2redirect/reddit',
    clientId: 'MERkV5B2re8B0A',
    clientSecret: '', // empty string - needed for iOS
    scopes: [
      'identity',
      'edit',
      'flair',
      'history',
      'modconfig',
      'modflair',
      'modlog',
      'modposts',
      'modwiki',
      'mysubreddits',
      'privatemessages',
      'read',
      'report',
      'save',
      'submit',
      'subscribe',
      'vote',
      'wikiedit',
      'wikiread',
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
      tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
    },
    customHeaders: {
      token: {
        Authorization: 'Basic <base64encoded clientID:>',
      },
    },
  };

  // Log in to get an authentication token
  async function authState() {
    const token = await authorize(config);
    await fetchAboutUser(token.accessToken);
    userLogin(token.accessToken);
    fetchDataFromApi(token.accessToken);
  }
  return (
    <View>
      {isLogged ? (
        /*
        <View style={{}}>
          <Button title="Logout" onPress={() => userLogout()} />

        </View>
        */
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => userLogout()}
            style={{
              width: 80,
              height: 25,
              borderRadius: 100,
              backgroundColor: 'red',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => authState()}
            style={{
              width: Dimensions.get('screen').width - 100,
              height: 40,
              borderRadius: 100,
              backgroundColor: 'black',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Login With Reddit
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    TokenFromRedux: state.login.accesToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(handleLogin(data)),
    fetchAboutUser: (token) => dispatch(fetchAboutUserData(token)),
    userLogout: () => dispatch(handleLogout()),
    fetchDataFromApi: (afterKey, dataJson, token) =>
      dispatch(fetchData(afterKey, dataJson, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
