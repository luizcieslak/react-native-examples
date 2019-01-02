import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Tab3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab3</Text>
      <Text style={styles.subtitle}>Page3</Text>
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
