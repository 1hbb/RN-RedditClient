import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const PostSelf = ({item}) => {
  const [lineNum, setLineNum] = useState(3);

  if (item.is_self) {
    return (
      <TouchableOpacity
        style={{marginHorizontal: 10, flex: 1}}
        onPress={() => setLineNum(undefined)}>
        <View>
          <Text style={{fontSize: 14, marginBottom: 7}} numberOfLines={lineNum}>
            {item.selftext}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <View></View>;
  }
};

export default PostSelf;
