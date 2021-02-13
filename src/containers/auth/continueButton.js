import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'res/colors';
import {connect} from 'react-redux';
import {userLogin} from '../../actions/userLoginAction';

const ContinueButton = ({login}) => {
  return (
    <TouchableOpacity onPress={() => login()}>
      <View style={Styles.container}>
        <Text style={Styles.continueText}>Continue</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(userLogin()),
  };
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.loginScreen.continueButton,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  continueText: {color: colors.loginScreen.continueText, fontSize: 20},
});

export default connect(null, mapDispatchToProps)(ContinueButton);
