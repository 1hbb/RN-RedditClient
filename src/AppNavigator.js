import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './containers/auth/LoginScreen';
import React from 'react';
import {Text, Button, View} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {userLogin, userLogout} from './actions/actions';
import LoginHeaderLeft from './containers/auth/loginHeaderLeft';
import LoginHeaderRight from './containers/auth/loginHeaderRight';
import colors from 'res/colors';
import MainNavigator from './containers/main/MainNavigator';
import LoginWarningScreen from './shared/Login/LoginWarningScreen';

const AppNavigator = ({isLogged, logout}) => {
  const Stack = createStackNavigator();
  /*
  const isLogged = useSelector((state) => state.login.isLogged);
  */

  return isLogged ? (
    <MainNavigator />
  ) : (
    <LoginWarningScreen />
  ); /*isLogged ? (
    <MainNavigator />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          //headerTransparent: true,
          headerLeft: () => <LoginHeaderLeft />,
          headerRight: () => <LoginHeaderRight />,
          headerStyle: {
            shadowColor: colors.loginScreen.headerShadow,
          },
        }}
      />
    </Stack.Navigator>);*/
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(userLogin()),
    logout: () => dispatch(userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
