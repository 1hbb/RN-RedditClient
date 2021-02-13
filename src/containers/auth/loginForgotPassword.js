import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from 'res/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginForgotPassword = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Text style={Styles.text}>Forgot password ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForgotPassword;

const Styles = StyleSheet.create({
  container: {marginTop: 15},
  text: {color: colors.loginScreen.forgotPasswordText, fontSize: 15},
});
