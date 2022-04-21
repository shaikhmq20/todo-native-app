import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input'

export default function HomeScreen() {
  return (
    <View>
      <Navbar />
      <Input />
    </View>
  )
}