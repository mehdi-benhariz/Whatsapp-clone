import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native'
import firebase from '../config'
import MyProfile from './home/MyProfile'
import ListProfiles from './home/ListProfiles'

const handleLogout = () => {
  firebase.auth().signOut()
}
const Tab =  createMaterialBottomTabNavigator();
export default function Home() {


        return (
          
            <Tab.Navigator>
              {/* <Tab.Screen name="Home" component={Home} ></Tab.Screen> */}
              <Tab.Screen name="My" component={MyProfile} ></Tab.Screen>
              <Tab.Screen name="ListProfiles" component={ListProfiles} ></Tab.Screen>

              
            </Tab.Navigator>
      
  )
}
