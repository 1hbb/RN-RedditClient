import React from 'react';
import {View, Text} from 'react-native';

const CommentKarma = ({data}) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: '500'}}>Comment Karma</Text>
      <Text style={{fontSize: 16, fontWeight: '500'}}>
        {data.comment_karma}
      </Text>
    </View>
  );
};

export default CommentKarma;
