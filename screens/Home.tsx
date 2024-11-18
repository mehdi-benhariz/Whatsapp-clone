import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native'

const tabs =  createMaterialBottomTabNavigator()
export default function Home() {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}