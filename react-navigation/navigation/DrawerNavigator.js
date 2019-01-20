import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Drawer1 from '../components/Drawer1'
import Drawer2 from '../components/Drawer2'
import DrawerComponent from '../components/DrawerComponent';

// Don't forget to change MainActivity.java after linking react-native-gesture-handler
// https://stackoverflow.com/questions/53394982/react-navigation-swipe-on-drawer-does-not-work-in-android
export default createDrawerNavigator({
    Drawer1: Drawer1,
    Drawer2: Drawer2
}, {
  drawerPosition: 'left',
  //custom component needed to have a header and footer in drawer
  contentComponent: (props) => <DrawerComponent {...props}/>,
  //centralizing tabBarIcon config, same in TabNavigator
  defaultNavigationOptions: ({ navigation }) => ({
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#fff',
    },
    drawerIcon: ({ focused, horizontal, tintColor }) => {
      let iconName
      if (navigation.state.routeName === 'Drawer1') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`
      } else if (navigation.state.routeName === 'Drawer2') {
        iconName = `ios-battery-${focused ? 'charging' : 'dead'}`
      }

      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
    }
  })
})