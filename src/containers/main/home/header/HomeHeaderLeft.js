import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeHeaderLeft = () => {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed Profile Avatar')}>
      <View style={Styles.container}>
        <Image
          source={{
            uri:
              'https://gravatar.com/avatar/8ab25ad6d31f4b05eeba519ee9d7fc5c?s=400&d=retro&r=x',
          }}
          style={Styles.profileImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeHeaderLeft;

const Styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', marginStart: 10},
  profileImage: {height: 30, width: 30, borderRadius: 5},
});
