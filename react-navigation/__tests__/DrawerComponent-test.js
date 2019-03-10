import React from 'react'
import renderer from 'react-test-renderer';
import DrawerComponent from '../components/DrawerComponent';

jest.mock('react-navigation-drawer') //need to mock DrawerNavigatorItems actually, not passing

test('TabNavigation renders correctly', () => {
  const tree = renderer.create(<DrawerComponent />).toJSON()
  expect(tree).toMatchSnapshot();
})