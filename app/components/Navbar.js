import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo</Text>
      {<TouchableHighlight style={styles.iconContainer} underlayColor={"#63acf2"} onPress={() => console.log("hello")}>
        <MaterialCommunityIcons name="delete" size={30} color="white"/>
      </TouchableHighlight>}
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "600"
  },
  iconContainer: {
    marginLeft: "auto",
    borderRadius: 50,
    padding: 10,
  }
})