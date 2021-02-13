import React from 'react';
import {View, Text, Image} from 'react-native';
import UserLogin from './UserLogin';
import images from 'res/images';

const LoginWarningScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        source={images.loginPageRedditIcon}
        style={{width: 300, height: 300, resizeMode: 'contain'}}
      />
      <Text
        style={{
          fontSize: 19,
          textAlign: 'center',
          marginHorizontal: 10,
          color: '#696969',
        }}>
        Please login with your Reddit account to use the app. This application
        will not be able to see your Reddit password.
      </Text>
      <UserLogin />
    </View>
  );
};

export default LoginWarningScreen;
