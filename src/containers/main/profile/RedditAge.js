import React from 'react';
import {View, Text} from 'react-native';
import UnixTimeConverter from '../../../shared/posts/UnixTimeConverter';

const RedditAge = ({data}) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: '500'}}>Reddit Age</Text>
      <Text style={{fontSize: 16, fontWeight: '500'}}>{UnixTimeConverter(data.created_utc)}</Text>
    </View>
  );
};

export default RedditAge;
