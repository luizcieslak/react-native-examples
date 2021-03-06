import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';

const DrawerComponent = (props) => (
  <View style={styles.container}>
    <ScrollView>
      <SafeAreaView style={styles.header} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Text>Very beautiful Header</Text>
      </SafeAreaView>
      <View style={styles.items}>
        <DrawerItems {...props} />
      </View>
    </ScrollView>
    <View style={styles.footer}>
      <Text>Awesome Footer</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3303',
    minHeight: 200,
  },
  footer: {
    backgroundColor: '#3303',
    minHeight: 30,
    bottom: 0
  }
});

export default DrawerComponent;