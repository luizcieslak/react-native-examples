import React from 'react';
import { createStackNavigator } from 'react-navigation'

import Stack1 from '../components/Stack1'
import Stack2 from '../components/Stack2'
import LogoTitle from '../components/LogoTitle';

export default createStackNavigator({
  Stack1: Stack1,
  Stack2: Stack2,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#fff',
    },
    //title: navigation.state.routeName
    headerTitle: <LogoTitle title={navigation.state.routeName} />
  }),
})