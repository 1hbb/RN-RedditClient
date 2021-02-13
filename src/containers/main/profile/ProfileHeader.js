import React from 'react';
import {View} from 'react-native';
import CommentKarma from './CommentKarma';
import PostKarma from './PostKarma';
import ProfilePicture from './ProfilePicture';
import RedditAge from './RedditAge';

const ProfileHeader = ({data}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 5,
      }}>
      <ProfilePicture data={data} />
      <PostKarma data={data} />
      <View
        style={{
          width: 0.5,
          height: 60,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignSelf: 'center',
        }}></View>
      <CommentKarma data={data} />
      <View
        style={{
          width: 0.5,
          height: 60,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignSelf: 'center',
        }}></View>
      <RedditAge data={data} />
    </View>
  );
};

export default ProfileHeader;
