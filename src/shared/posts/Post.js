import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import PostHeader from './PostHeader';
import colors from 'res/colors';
import PostImage from './PostImage';
import PostWebLink from './PostWebLink';
import PostVideo from './PostVideo';
import PostActions from './PostActions';
import PostTitle from './PostTitle';
import PostSelf from './PostSelf';

const Post = ({item, viewableItems, navigation}) => {
  //console.log('Vieawable items are in postjs ', viewableItems);
  return (
    <View style={Styles.container}>
      <PostHeader item={item.data} />
      <PostTitle item={item.data} />
      <PostSelf item={item.data} />
      <PostImage item={item.data} />
      <PostWebLink item={item.data} />
      <PostActions item={item.data} />

      {/*
      {item.data.post_hint === 'image' ? (
        <PostImage item={item.data} />
      ) : item.data.post_hint === 'link' &&
        item.data.post_hint === 'hosted:video' &&
        item.data.post_hint === 'videogif' &&
        !item.data.url.includes('gif', 'gifv') ? (
        <PostWebLink item={item.data} />
      ) : item.data.post_hint === 'hosted:video' ? (
        //<PostVideo item={item.data} />
        <View>
          <Text>Video Content</Text>
        </View>
      ) : item.data.is_self ? (
        <View></View>
      ) : item.data.post_hint === 'videogif' ? (
        <View></View>
      ) : (
        <View></View>
      )}
      */}

      {/*<PostActions item={item.data} />*/}
    </View>
  );
};

export default Post;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.homeScreen.postBackground,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
