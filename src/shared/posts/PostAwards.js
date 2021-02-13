import React, {useState, useEffect} from 'react';
import {FlatList, Image, View, Dimensions} from 'react-native';

const _renderItem = ({index, item}) => (
  <View style={{}}>
    <View
      style={{
        width: 20,
        height: 20,
        marginHorizontal: 5,
        marginVertical: 5,
        flex: 1,
      }}>
      <Image
        source={{
          uri:
            item.resized_static_icons[item.resized_static_icons.length - 3].url,
          cache: 'force-cache',
        }}
        style={{
          height: 20,
        }}
      />
    </View>
  </View>
);

const PostAwards = ({item}) => {
  const [imageOpacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
    return () => {
      setOpacity(0);
    };
  });
  const awardsWidth =
    item.all_awardings.length * 30 < Dimensions.get('window').width
      ? item.all_awardings.length * 30
      : Dimensions.get('window').width - 20;
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        width: awardsWidth,
        borderRadius: 20,
        opacity: imageOpacity,
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <FlatList
        data={item.all_awardings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PostAwards;
