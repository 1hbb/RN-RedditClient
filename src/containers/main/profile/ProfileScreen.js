import React, {useEffect} from 'react';
import {
  RefreshControl,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {
  fetchMyPostsData,
  fetchMyPostsDataNextPage,
} from '../../../actions/fetchMyPosts';
import {fetchAboutUserData} from '../../../actions/fetchProfileAction';

import UserLogin from '../../../shared/Login/UserLogin';
import Post from '../../../shared/posts/Post';
import ProfileHeader from './ProfileHeader';

const _ItemSeparatorComponent = () => <View style={{height: 7}}></View>;
const renderItem = ({index, item}) => <Post item={item} />;

const ProfileScreen = ({
  data,
  loading,
  error,
  userData,
  token,
  fetchUserData,
  isLogged,
  fetchPosts,
  postsData,
  afterKey,
  fetchMyPostsNext
}) => {
  const refresh = () => {
    fetchUserData(token);
    fetchPosts(token, userData.name);
  };

  useEffect(() => {
    refresh();
  }, []);
  return isLogged ? (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={() => refresh()} refreshing={loading} />
        }
        ListHeaderComponent={() => {
          return (
            <>
              <ProfileHeader data={data} />
            </>
          );
        }}
        ListFooterComponent={() => {
          return loading ? (
            <View style={{marginVertical: 15}}>
              <ActivityIndicator />
            </View>
          ) : (
            <View></View>
          );
        }}
        data={postsData}
        renderItem={renderItem}
        ItemSeparatorComponent={_ItemSeparatorComponent}
        removeClippedSubviews={true}
        
        onEndReachedThreshold={1}
        keyExtractor={(item, index) => index.toString()}
        maxToRenderPerBatch={5}
        initialNumToRender={5}
        windowSize={10}
        onEndReached={
          (onEndReached = () => {
            if (!loading) {
              fetchMyPostsNext(afterKey, token, userData.name);
            }
          })
        }
      />
    </View>
  ) : (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <UserLogin />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.aboutUser.data,
    postsData: state.myPosts.data,
    loading: state.aboutUser.loading,
    error: state.aboutUser.error,
    token: state.login.accesToken,
    isLogged: state.login.isLogged,
    userData: state.aboutUser.data,
    afterKey: state.myPosts.after,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (token) => dispatch(fetchAboutUserData(token)),
    fetchPosts: (token, user) => dispatch(fetchMyPostsData(token, user)),
    fetchMyPostsNext: (afterKey, token, user) =>
      dispatch(fetchMyPostsDataNextPage(afterKey, token, user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
