import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeHeaderLeft from './header/HomeHeaderLeft';
import HomeHeaderSearch from './header/HomeHeaderSearch';
import HomeHeaderRight from './header/HomeHeaderRight';
import colors from 'res/colors';

const HomeNavigator = ({navigation}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => /*<HomeHeaderLeft />*/ <View></View>,
          headerRight: () => /*<HomeHeaderRight />*/ <View></View>,
          headerTitle: () => <HomeHeaderSearch />,
          headerStyle: {shadowColor: colors.stackHeader.shadowColor},
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
