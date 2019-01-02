import React from 'react';
import { StackNavigator, createStackNavigator } from 'react-navigation'

import Stack1 from '../components/Stack1'
import Stack2 from '../components/Stack2'

export default createStackNavigator({
  Stack1: Stack1,
  Stack2: Stack2,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#fff',
    },
    title: navigation.state.routeName
  }),
})