import React from 'react';
import {
  View,
  Dimensions,
  Text,
  ProgressViewIOSBase,
  Alert,
  Linking,
  Image as DefaultImage,
  TouchableOpacity,
} from 'react-native';
//import {TouchableOpacity} from 'react-native-gesture-handler';
import images from 'res/images';
import {BlurView} from '@react-native-community/blur';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import Image from 'react-native-image-progress';

const PostWebLink = ({item, navigation}) => {
  if (
    item.post_hint === 'link' ||
    item.post_hint === 'hosted:video' ||
    item.post_hint === 'rich:video'
  ) {
    const url = item.url_overridden_by_dest;

    async function openLink() {
      try {
        if (await InAppBrowser.isAvailable()) {
          const result = await InAppBrowser.open(url, {
            // iOS Properties
            dismissButtonStyle: 'done',
            //preferredBarTintColor: '#453AA4',
            //preferredControlTintColor: '#007aff',
            readerMode: false,
            animated: true,
            modalPresentationStyle: 'fullScreen',
            modalTransitionStyle: 'coverVertical',
            modalEnabled: true,
            enableBarCollapsing: false,
            // Android Properties
            showTitle: true,
            //toolbarColor: '#6200EE',
            secondaryToolbarColor: 'black',
            enableUrlBarHiding: true,
            enableDefaultShare: true,
            forceCloseOnRedirection: false,
            // Specify full animation resource identifier(package:anim/name)
            // or only resource name(in case of animation bundled with app).
            animations: {
              startEnter: 'slide_in_right',
              startExit: 'slide_out_left',
              endEnter: 'slide_in_left',
              endExit: 'slide_out_right',
            },
            headers: {
              'my-custom-header': 'my custom header value',
            },
          });
          //Alert.alert(JSON.stringify(result));
        } else Linking.openURL(url);
      } catch (error) {
        Alert.alert(error.message);
      }
    }

    const PREWIEV_RESOLUTIONS = item.preview.images[0].resolutions;

    const IMAGE_HEIGHT = /*(Dimensions.get('screen').width /
        PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].width) *
      PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].height *
      0.95*/ 250;

    const IMAGE_WIDTH = Dimensions.get('screen').width * 0.95;

    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => openLink()}>
        <View
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT + 50,
            backgroundColor: '#f0f0f0',
            alignSelf: 'center',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: PREWIEV_RESOLUTIONS[PREWIEV_RESOLUTIONS.length - 1].url,
              cache: 'force-cache',
            }}
            indicator={ProgressViewIOSBase}
            style={{
              flex: 1,
            }}
            borderTopLeftRadius={20}
            borderTopRightRadius={20}
            resizeMode={'cover'}
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
                  borderRadius: 20,
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
          <View
            style={{
              width: IMAGE_WIDTH,
              height: 50,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flexDirection: 'row',
              backgroundColor: '#f0f0f0',
            }}>
            <DefaultImage
              source={images.compassIcon}
              style={{
                width: 35,
                height: 35,
                alignSelf: 'center',
                marginLeft: 5,
                borderRadius: 100,
              }}
            />

            <View
              style={{
                width: 0.5,
                height: 40,
                backgroundColor: 'black',
                alignSelf: 'center',
                marginHorizontal: 5,
              }}></View>
            <View style={{alignSelf: 'center', marginEnd: 70}}>
              <Text numberOfLines={1}>{item.url_overridden_by_dest}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return <View></View>;
  }
};

export default PostWebLink;
