import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ComunitiesScreen from './ComunitiesScreen';

const ComunitiesNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Comunities" component={ComunitiesScreen} />
    </Stack.Navigator>
  );
};

export default ComunitiesNavigator;
