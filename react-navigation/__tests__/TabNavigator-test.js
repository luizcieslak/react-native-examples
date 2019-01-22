import React from 'react'
import renderer from 'react-test-renderer';
import TabNavigator from '../navigation/TabNavigator'
//import screens
import StackNavigator from '../navigation/StackNavigator'
import Tab2 from '../components/Tab2'
import DrawerNavigator from '../navigation/DrawerNavigator'

// Mock react-navigation functions
jest.mock('react-navigation', () => {
  return {
    createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) { return null; }),
    createDrawerNavigator: jest.fn(),
    createBottomTabNavigator: jest.fn(),
    createMaterialTopTabNavigator: jest.fn(),
    createStackNavigator: jest.fn(),
    StackActions: {
      push: jest.fn().mockImplementation(x => ({ ...x, "type": "Navigation/PUSH" })),
      replace: jest.fn().mockImplementation(x => ({ ...x, "type": "Navigation/REPLACE" })),
    },
    NavigationActions: {
      navigate: jest.fn().mockImplementation(x => x),
    }
  }
});

test('TabNavigation renders correctly', () => {
  const tree = renderer.create(<TabNavigator />).toJSON()
  expect(tree).toMatchSnapshot();
})