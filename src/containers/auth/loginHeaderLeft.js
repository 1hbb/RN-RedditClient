import React from 'react';
import images from 'res/images';
import {View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginHeaderLeft = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <TouchableOpacity onPress={() => console.log('pressed close ')}>
          <Image source={images.closeIcon} style={Styles.closeImage} />
        </TouchableOpacity>
        <Image source={images.redditLogoWithText} style={Styles.redditLogo} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeImage: {
    height: 20,
    width: 20,
    marginStart: 20,
  },
  redditLogo: {
    height: 40,
    width: 140,
    resizeMode: 'contain',
    marginStart: 20,
  },
});

export default LoginHeaderLeft;
