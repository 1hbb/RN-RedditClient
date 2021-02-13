import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import images from 'res/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeHeaderRight = () => {
  return (
    <TouchableOpacity onPress={() => console.log('pressed coin')}>
      <View style={Styles.container}>
        <Image source={images.coinIcon} style={Styles.coinImage} />
      </View>
    </TouchableOpacity>
  );
};

export default HomeHeaderRight;

const Styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', marginEnd: 10},
  coinImage: {width: 30, height: 30},
});
