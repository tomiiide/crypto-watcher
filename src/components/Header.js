import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>CryptoWatch</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer : {
    display : "flex",
    marginTop : 55,
    alignItems : 'center'
  },
  header  : {
    fontWeight : "bold",
    fontSize : 20
  }
})

const {header, headerContainer} = styles;

export default Header;