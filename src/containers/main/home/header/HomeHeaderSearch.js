import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import images from 'res/images';
import colors from 'res/colors';
import {connect} from 'react-redux';
import {fetchData} from '../../../../actions/actions';

const searchBoxWidth = Dimensions.get('screen').width - 110;

const HomeHeaderSearch = ({TokenFromRedux, userLogin, fetchDataFromApi}) => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={Styles.container}>
      <Image source={images.searchIcon} style={Styles.searchImage} />
      <TextInput
        placeholder="Search"
        style={Styles.TextInput}
        /*
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() =>
          fetchDataFromApi(null, null, TokenFromRedux, `${text}`)
        }
        defaultValue={text}
        */
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    TokenFromRedux: state.login.accesToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(handleLogin(data)),
    fetchDataFromApi: (afterKey, dataJson, token, data) =>
      dispatch(fetchData(afterKey, dataJson, token, data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeaderSearch);

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: searchBoxWidth,
    height: 35,
    backgroundColor: colors.homeScreen.homeSearchInput,
    borderRadius: 5,
  },
  searchImage: {width: 20, height: 20, marginStart: 20},
  TextInput: {
    height: 40,
    width: searchBoxWidth - 40,
    marginStart: 10,
    fontSize: 17,
  },
});
