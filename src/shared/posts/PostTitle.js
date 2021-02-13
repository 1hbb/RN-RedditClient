import React from 'react';
import {View, Text} from 'react-native';

const PostTitle = ({item}) => {
  return (
    <View style={{marginHorizontal: 10, flex: 1}}>
      <View>
        <Text style={{fontSize: 17, marginBottom: 7}}>{item.title}</Text>
      </View>
    </View>
  );
};

export default PostTitle;
