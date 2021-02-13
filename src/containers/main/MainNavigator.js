import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab Navigator"
        component={TabNavigator}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
