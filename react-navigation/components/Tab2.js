import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Tab2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab2</Text>
      <Text style={styles.subtitle}>Page2</Text>
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

export default Tab2;