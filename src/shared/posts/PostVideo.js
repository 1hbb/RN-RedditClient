/*import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import Video from 'react-native-video';

const PostVideo = ({item}) => {
  return <CCPostVideo item={item} />;
};

class CCPostVideo extends Component {
  render() {
    const item = this.props.item;

    const VIDEO_RESOLUTIONS = item.preview.images[0].resolutions;

    const VİDEO_URL = item.preview.reddit_video_preview
      ? item.preview.reddit_video_preview.fallback_url
      : item.preview.images[0].variants && item.preview.images[0].variants.mp4
      ? item.preview.images[0].variants.mp4.source.url
      : item.media.reddit_video.fallback_url
          .split('?source=fallback')[0]
          .replace('720', '360');

    const VİDEO_HEIGHT =
      (Dimensions.get('screen').width /
        VIDEO_RESOLUTIONS[VIDEO_RESOLUTIONS.length - 1].width) *
      VIDEO_RESOLUTIONS[VIDEO_RESOLUTIONS.length - 1].height;

    const VİDEO_WIDTH = Dimensions.get('screen').width;

    return (
      <View style={{width: VİDEO_WIDTH, height: VİDEO_HEIGHT, flex: 1}}>
        <Video
          source={{uri: VİDEO_URL}} // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          controls={true}
          paused={true}
          muted={false}
          poster={VIDEO_RESOLUTIONS[VIDEO_RESOLUTIONS.length - 1].url}
          //posterResizeMode={'contain'}
          //repeat={true}
          ignoreSilentSwitch={'ignore'}
          style={{
            height: VİDEO_HEIGHT,
          }}
        />
      </View>
    );
  }
}

//export default PostVideo;
 */
