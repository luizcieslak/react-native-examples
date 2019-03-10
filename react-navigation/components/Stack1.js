import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Stack1 = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack1</Text>
      <Text style={styles.subtitle}>Page1</Text>
      <Button onPress={() => navigation.navigate('Stack2')} title={'Next'} />
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

export default Stack1;