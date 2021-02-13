import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ProgressViewIOSBase,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Image from 'react-native-image-progress';
import {BlurView} from '@react-native-community/blur';

const PostImage = ({item}) => {
  if (item.post_hint === 'image') {
    const [imageOpacity, setOpacity] = useState(0);

    useEffect(() => {
      setOpacity(1);
      //console.log('unmounted');
      return () => {
        setOpacity(0);
      };
    });

    const [modalVisible, setModalVisible] = useState(false);
    const PREWIEV_RESOLUTIONS = item.preview.images[0].resolutions;

    const IMAGE_HEIGHT =
      (Dimensions.get('screen').width /
        PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].width) *
      PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].height;

    const IMAGE_WIDTH = Dimensions.get('screen').width;
    const images = [
      {
        url: item.preview.images[0].source.url,
        width: item.preview.images[0].source.width,
        height: item.preview.images[0].source.height,
      },
    ];

    return item.url.includes('gif') ? (
      //<PostVideo item={item} />
      <View></View>
    ) : (
      <View
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          justifyContent: 'center',
          backgroundColor: 'lightgrey',
          flex: 1,
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          activeOpacity={1}
          style={{justifyContent: 'center'}}>
          <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => setModalVisible(false)}>
            <ImageViewer
              imageUrls={images}
              enableSwipeDown={true}
              enableImageZoom={true}
              onSwipeDown={() => {
                setModalVisible(false);
              }}
              saveToLocalByLongPress={false}
              useNativeDriver={true}
              doubleClickInterval={350}
              swipeDownThreshold={100}
            />
          </Modal>
          <Image
            source={{
              uri: PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].url,
              cache: 'force-cache',
            }}
            indicator={ProgressViewIOSBase}
            style={{
              height: IMAGE_HEIGHT,
              //resizeMode: 'contain',
              opacity: imageOpacity,
            }}
            resizeMode={'contain'}
          />
          {item.over_18 ? (
            <>
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
                blurType="light"
                blurAmount={50}
                reducedTransparencyFallbackColor="white"
              />
              <View
                style={{
                  position: 'absolute',
                  //alignSelf: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 40,
                    color: '#f5f3f0',
                    alignSelf: 'center',
                    fontFamily: 'Times New Roman',
                  }}>
                  NSFW!
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 17,
                    color: '#f5f3f0',
                    alignSelf: 'center',
                    fontFamily: 'Times New Roman',
                  }}>
                  Sensitive Content! Tap For Open
                </Text>
              </View>
            </>
          ) : (
            <View></View>
          )}
        </TouchableOpacity>
      </View>

      /*<View
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          justifyContent: 'center',
        }}>
        <Lightbox>
          <Image
            source={{
              uri: PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].url,
              cache: 'force-cache',
            }}
            indicator={ProgressViewIOSBase}
            style={{
              height: IMAGE_HEIGHT,
              resizeMode: 'contain',
            }}
            resizeMode={'contain'}
          />
        </Lightbox>
        {item.over_18 ? (
          <>
            <BlurView
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              blurType="light"
              blurAmount={50}
              reducedTransparencyFallbackColor="white"
            />
            <Text
              style={{
                position: 'absolute',
                alignSelf: 'center',
                fontWeight: '600',
                fontSize: 40,
                color: '#f5f3f0',
                fontFamily: 'Times New Roman',
              }}>
              NSFW
            </Text>
          </>
        ) : (
          <View></View>
        )}
      </View>
      */
    );
  } else {
    return <View></View>;
  }
};

export default PostImage;

const Styles = StyleSheet.create({});
