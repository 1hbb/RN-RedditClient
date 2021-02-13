import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from './ChatScreen';

const ChatNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
