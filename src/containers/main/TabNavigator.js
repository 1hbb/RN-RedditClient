import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';

import HomeNavigator from './home/HomeNavigator';
import ComunitiesNavigator from './comunities/ComunitiesNavigator';
import AddPostNavigator from './addPost/AddPostNavigator';
import ChatNavigator from './chat/ChatNavigator';
import ProfileNavigator from './profile/ProfileNavigator';
import {BlurView} from '@react-native-community/blur';

import images from 'res/images';

const TabNavigator = ({navigation, error, data, isLogged}) => {
  const Tab = createBottomTabNavigator();
  var userName = '';
  if (isLogged) {
    userName = data.name;
  } else {
    userName = 'Profile';
  }

  return (
    <Tab.Navigator
      tabBarOptions={{
        //showLabel: false,
        showIcon: true,
        style: {backgroundColor: '#fff', flexWrap: 'wrap'},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? images.home_selected : images.home;
          } else if (route.name === 'Comunities') {
            iconName = focused ? images.comunities_selected : images.comunities;
          } else if (route.name === 'AddPost') {
            iconName = focused ? images.addPost_selected : images.addPost;
          } else if (route.name === 'Chat') {
            iconName = focused ? images.chat_selected : images.chat;
          } else if (route.name === 'Profile') {
            iconName = focused ? images.profileSelected : images.profile;
          }

          return <Image style={Styles.image} source={iconName} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        navigation={navigation}
        component={HomeNavigator}
      />
      <Tab.Screen name="Comunities" component={ComunitiesNavigator} />
      <Tab.Screen name="AddPost" component={AddPostNavigator} />
      <Tab.Screen name="Chat" component={ChatNavigator} />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{title: userName}}
      />
    </Tab.Navigator>
  );
};

//export default TabNavigator;

const Styles = StyleSheet.create({
  image: {width: 25, height: 25, resizeMode: 'contain'},
});

const mapStateToProps = (state) => {
  return {
    isLogged: state.login.isLogged,
    data: state.aboutUser.data,
    error: state.aboutUser.error,
  };
};

export default connect(mapStateToProps, null)(TabNavigator);
