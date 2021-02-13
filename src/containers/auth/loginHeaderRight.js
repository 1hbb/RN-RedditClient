import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';

const loginHeaderLeft = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={() => console.log('Pressed SignUp')}>
        <Text style={Styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'flex-end', marginEnd: 20},
  signUpText: {
    color: colors.loginScreen.signUpText,
    fontWeight: '500',
    fontSize: 20,
  },
});

export default loginHeaderLeft;
