import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import images from 'res/images';
import colors from 'res/colors';

const CountinueWithGoogle = () => {
  return (
    <TouchableOpacity
      style={Styles.container}
      onPress={() => console.log('Pressed Continue Wİth Google')}>
      <View style={Styles.container2}>
        <Image source={images.googleLogo} style={Styles.googleLogo} />
        <Text style={Styles.cwgText}>Continue With Google</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountinueWithGoogle;

const Styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.loginScreen.cwgButtonBorder,
    height: 50,
    borderRadius: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  container2: {justifyContent: 'space-evenly', flexDirection: 'row'},
  googleLogo: {width: 25, height: 25},
  cwgText: {color: colors.loginScreen.cwgText, fontWeight: '700', fontSize: 20},
});
