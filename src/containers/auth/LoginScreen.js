import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {userLogin} from '../../actions/userLoginAction';
import colors from 'res/colors';
import LoginScreenText from './loginScreenText';
import CountinueWithGoogle from './continueWithGoogle';
import LineSperator from './lineSeperator';
import LoginScreenInput from './loginScreenInput';
import ContinueButton from './continueButton';

const LoginScreen = ({login}) => {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.LoginScreenText}>
          <LoginScreenText />
        </View>
        <View style={Styles.CountinueWithGoogle}>
          <CountinueWithGoogle />
        </View>
        <View style={Styles.LineSperator}>
          <LineSperator />
        </View>
        <View style={Styles.LoginScreenInput}>
          <LoginScreenInput />
        </View>
        <View style={Styles.ContinueButton}>
          <ContinueButton />
        </View>

        {/*<Text>Login Screen</Text>
      <Button title="Login" onPress={() => login()} />
        <LoginScreenHeader />
        */}
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(userLogin()),
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.loginScreen.backgroundColor,
  },
  LoginScreenText: {flex: 3, justifyContent: 'center'},
  CountinueWithGoogle: {flex: 2.5, justifyContent: 'flex-end'},
  LineSperator: {flex: 1, justifyContent: 'center'},
  LoginScreenInput: {flex: 6, justifyContent: 'flex-start'},
  ContinueButton: {flex: 5, justifyContent: 'center'},
});
