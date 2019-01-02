import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

//import screens
import StackNavigator from './StackNavigator'
import Tab2 from '../components/Tab2'
import Tab3 from '../components/Tab3'

const TabNavigator = createBottomTabNavigator({
  Tab1: StackNavigator,
  Tab2: Tab2,
  Tab3: Tab3,
}, {
    //centralizing tabBarIcon config
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName

        if (routeName === 'Tab1') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Tab2') {
          iconName = `ios-battery-${focused ? 'charging' : 'dead'}`
        } else if (routeName === 'Tab3') {
          iconName = `ios-close-circle${focused ? '' : '-outline'}`
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  })

export default createAppContainer(TabNavigator)