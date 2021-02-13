import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from 'res/colors';
import UnixTimeConverter from './UnixTimeConverter';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PostAwards from './PostAwards';

const PostHeader = ({item}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: colors.homeScreen.postHeaderItems,
            }}>
            {item.subreddit_name_prefixed}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: 20,
              height: 20,
              alignItems: 'center',
            }}
            onPress={() => alert('pressed more')}>
            <View
              style={{
                width: 3,
                height: 3,
                marginHorizontal: 1,
                backgroundColor: '#464646',
                borderRadius: 5,
              }}></View>
            <View
              style={{
                width: 3,
                height: 3,
                marginHorizontal: 1,
                backgroundColor: '#464646',
                borderRadius: 5,
              }}></View>
            <View
              style={{
                width: 3,
                height: 3,
                marginHorizontal: 1,
                backgroundColor: '#464646',
                borderRadius: 5,
              }}></View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: colors.homeScreen.postHeaderItems}}>
            u/{item.author}
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              marginHorizontal: 3,
              backgroundColor: '#464646',
              borderRadius: 5,
            }}></View>
          {/*<Text>{item.post_hint}</Text>*/}
          <Text style={{color: colors.homeScreen.postHeaderItems}}>
            {UnixTimeConverter(item.created_utc)}
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              marginHorizontal: 3,
              backgroundColor: '#464646',
              borderRadius: 5,
            }}></View>
          <Text style={{color: colors.homeScreen.postHeaderItems}}>
            {item.domain}
          </Text>
        </View>
      </View>
      <PostAwards item={item} />
    </View>
  );
};

export default PostHeader;

const Styles = StyleSheet;
