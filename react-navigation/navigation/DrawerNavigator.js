import React from 'react'
import Image from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import Drawer1 from '../components/Drawer1'
import Drawer2 from '../components/Drawer2'

// Don't forget to change MainActivity.java after linking react-native-gesture-handler
// https://stackoverflow.com/questions/53394982/react-navigation-swipe-on-drawer-does-not-work-in-android
export default createDrawerNavigator({
    Drawer1: Drawer1,
    Drawer2: Drawer2
  },
  Drawer2: {
    screen: Drawer2
  }
})