import React from 'react';
import { Image, View, Text } from 'react-native'

const LogoTitle = ({ title }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        source={require('../assets/rn-logo.png')}
        style={{ width: 50, height: 50, marginLeft: 10 }}
      />
      <Text style={{ alignSelf: 'center', fontSize: 25, marginLeft: 5 }}>{title}</Text>
    </View>
  )
}

export default LogoTitle;