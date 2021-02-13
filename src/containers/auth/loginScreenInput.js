import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import LoginForgotPassword from './loginForgotPassword';
import colors from 'res/colors';

const LoginScreenInput = () => {
  return (
    <View style={Styles.container}>
      <TextInput placeholder="Username" style={Styles.userNameInput} />
      <TextInput
        placeholder="Password"
        style={Styles.passwordInput}
        secureTextEntry={true}
      />
      <LoginForgotPassword />
    </View>
  );
};

export default LoginScreenInput;

const Styles = StyleSheet.create({
  container: {marginHorizontal: 10},
  userNameInput: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.loginScreen.loginInputBackground,
    fontSize: 17,
    paddingStart: 10,
  },
  passwordInput: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.loginScreen.loginInputBackground,
    marginTop: 10,
    fontSize: 17,
    paddingStart: 10,
  },
});
