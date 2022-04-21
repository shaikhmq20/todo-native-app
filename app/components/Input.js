import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Want to do some task?"/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 5,
    borderColor: "#fcfcfc",
    borderRadius: 10,
    width: "75%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
})