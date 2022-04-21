import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  text: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "600"
  }
})