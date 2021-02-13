import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../posts/node_modules/res/colors';

const HomeScreenTopics = () => {
  const [newsState, setNewsState] = useState('#b6b6b6');
  const [homeState, setHomeState] = useState('#000');
  const [popularState, setPopularState] = useState('#b6b6b6');

  const Styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 50,
      backgroundColor: colors.homeScreen.homeScreenBackground,
    },
    newsText: {fontSize: 17, color: newsState},
    popularText: {fontSize: 17, color: popularState},
    homeText: {fontSize: 17, color: homeState},
  });

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => (
          setPopularState('#b6b6b6'),
          setHomeState('#b6b6b6'),
          setNewsState('#000')
        )}>
        <Text style={Styles.newsText}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (
          setPopularState('#b6b6b6'),
          setNewsState('#b6b6b6'),
          setHomeState('#000')
        )}>
        <Text style={Styles.homeText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (
          setHomeState('#b6b6b6'),
          setNewsState('#b6b6b6'),
          setPopularState('#000')
        )}>
        <Text style={Styles.popularText}>Popular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenTopics;
