import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddPostScreen from './AddPostScreen';

const AddPostNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="AddPost" component={AddPostScreen} />
    </Stack.Navigator>
  );
};

export default AddPostNavigator;
