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
  fetchData,
  fetchDataNextPage,
} from '../../../actions/fetchMainfeedAction';

import Post from '../../../shared/posts/Post';

const _ItemSeparatorComponent = () => <View style={{height: 7}}></View>;
const renderItem = ({index, item}) => <Post item={item} />;

const PostsFlatlist = ({
  fetchDataFromApi,
  dataJson,
  loading,
  error,
  afterKey,
  token,
  fetchDataFromApiNextPage,
}) => {
  useEffect(() => {
    fetchDataFromApi(token);
  }, [fetchDataFromApi]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      {error ? (
        <Text style={{alignSelf: 'center'}}>{error.message}</Text>
      ) : (
        <View></View>
      )}

      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={() => fetchDataFromApi(token)}
            refreshing={loading}
          />
        }
        ListFooterComponent={() => {
          return loading ? (
            <View style={{marginVertical: 15}}>
              <ActivityIndicator />
            </View>
          ) : (
            <View></View>
          );
        }}
        data={dataJson}
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
              fetchDataFromApiNextPage(afterKey, token);
            }
          })
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    dataJson: state.mainFeedData.data,
    loading: state.mainFeedData.loading,
    error: state.mainFeedData.error,
    afterKey: state.mainFeedData.after,
    token: state.login.accesToken,
    isLogged: state.login.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromApi: (token) => dispatch(fetchData(token)),
    fetchDataFromApiNextPage: (afterKeyy, token) =>
      dispatch(fetchDataNextPage(afterKeyy, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsFlatlist);
