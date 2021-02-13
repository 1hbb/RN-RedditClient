import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import images from 'res/images';

const PostActions = ({item}) => {
  const [upVoteBackground, setUpVoteBackground] = useState('undefinded');
  const [downVoteBackground, setDownVoteBackground] = useState('undefinded');

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
        justifyContent: 'space-evenly',
        //height: 30,
        borderRadius: 10,
        flex: 1,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: upVoteBackground,
            width: 120,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: 100,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              setUpVoteBackground('#ff4400');
            }}>
            <Image source={images.upvote} style={{width: 25, height: 25}} />
          </TouchableOpacity>

          <Text
            style={{marginHorizontal: 10, fontSize: 13, alignSelf: 'center'}}>
            {item.ups > 1000 ? (item.ups / 1000).toFixed(1) + 'k' : item.ups}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setUpVoteBackground('#7192ff');
            }}>
            <Image source={images.downvote} style={{width: 25, height: 25}} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={images.comment} style={{width: 20, height: 20}} />
          <Text style={{marginStart: 5, fontSize: 12, alignSelf: 'center'}}>
            {item.num_comments}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={images.share} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostActions;
