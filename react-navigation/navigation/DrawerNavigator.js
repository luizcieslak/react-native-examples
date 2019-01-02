import React from 'react'
import Image from 'react-native'
import { createDrawerNavigator } from 'react-navigation'

import Drawer1 from '../components/Drawer1'
import Drawer2 from '../components/Drawer2'

export default createDrawerNavigator({
  Drawer1: {
    screen: Drawer1
  },
  Drawer2: {
    screen: Drawer2
  }
})