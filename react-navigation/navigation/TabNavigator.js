import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
//import screens
import Tab1 from '../components/Tab1'
import Tab2 from '../components/Tab2'
import Tab3 from '../components/Tab3'

const TabNavigator = createBottomTabNavigator({
  Tab1: Tab1,
  Tab2: Tab2,
  Tab3: Tab3,
})

export default createAppContainer(TabNavigator)