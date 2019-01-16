import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer1 = ({ navigation }) => {

  navigationOptions = {
    title: 'Title'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawer1</Text>
      <Text style={styles.subtitle}>Page1</Text>
      <Button onPress={() => navigation.toggleDrawer()} title={'Drawer'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createStackNavigator({
  Drawer1: Drawer1,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerLeft: <Ionicons 
      name={'ios-menu'} 
      size={30} 
      style={{ marginLeft: 5}} 
      onPress={() => navigation.toggleDrawer()} 
    />,
    //title: navigation.state.routeName
    headerTitle: <LogoTitle title={navigation.state.routeName}/>
  }),
})