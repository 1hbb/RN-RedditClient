import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import {connect} from 'react-redux';
import UserLogin from '../../../shared/Login/UserLogin';

const ProfileNavigator = ({error, data, isLogged}) => {
  const Stack = createStackNavigator();
  var userName = '';
  if (isLogged) {
    userName = data.name;
  } else {
    userName = 'Profile';
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: userName,
          headerRight: () => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <UserLogin />
            </View>
          ),
          headerTitleStyle: {alignSelf: 'center', fontSize: 19},
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    data: state.aboutUser.data,
    error: state.aboutUser.error,
  };
};

export default connect(mapStateToProps, null)(ProfileNavigator);
