import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from 'res/colors';

const LineSperator = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.lineSep}>{/**/}</View>
      <Text style={Styles.text}>OR</Text>
      <View style={Styles.lineSep}>{/**/}</View>
    </View>
  );
};

export default LineSperator;

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  lineSep: {
    height: 1,
    backgroundColor: colors.loginScreen.lineSepColor,
    flex: 1,
  },
  text: {marginHorizontal: 20},
});
