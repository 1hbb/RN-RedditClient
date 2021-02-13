import React from 'react';
import {View, Text} from 'react-native';

const PostKarma = ({data}) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: '500'}}>Post Karma</Text>
      <Text style={{fontSize: 16, fontWeight: '500'}}>{data.link_karma}</Text>
    </View>
  );
};

export default PostKarma;
