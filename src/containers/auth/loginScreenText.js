import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from 'res/colors';

const LoginScreenText = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.loginText}>Log in</Text>
      <View style={Styles.container2}>
        <View style={Styles.container3}>
          <Text style={Styles.termsText}>By continuing, you agree to our </Text>
          <TouchableOpacity
            onPress={() => console.log('Pressed User Agreement')}>
            <Text style={Styles.termsLinkText}>User Agreement </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.container4}>
          <Text style={Styles.termsText}>and </Text>
          <TouchableOpacity
            onPress={() => console.log('Pressed Privacy Policy')}>
            <Text style={Styles.termsLinkText}>Privacy Policy.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreenText;

const Styles = StyleSheet.create({
  container: {marginHorizontal: 20, flexDirection: 'column'},
  loginText: {
    color: colors.loginScreen.loginText,
    fontWeight: '700',
    fontSize: 35,
  },
  termsText: {color: colors.loginScreen.termsText, fontSize: 17},
  termsLinkText: {color: colors.loginScreen.termsLinkText, fontSize: 17},
  container2: {flexDirection: 'column', marginTop: 10},
  container3: {flexDirection: 'row'},
  container4: {flexDirection: 'row'},
});
