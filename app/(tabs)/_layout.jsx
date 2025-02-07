import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'


const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY
    }}
    >
     <Tabs.Screen name="home" 
        options={{
            title:"Home",
            tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />,
            headerShown: false
        }}
     />
     <Tabs.Screen name="favorite"
        options={{
            title:"Favorites",
            tabBarIcon: ({color}) => <Ionicons name="heart" size={24} color={color} />,
            headerShown: false
        }}
     />
     <Tabs.Screen name="inbox"
        options={{
            title:"Inbox",
            tabBarIcon: ({color}) => <Ionicons name="chatbubble" size={24} color={color} />,
            headerShown: false
        }}
     />
     <Tabs.Screen name="profile"
        options={{
            title:"Profile",
            tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} />,
            headerShown: false
        }}
     />
    </Tabs>
  )
}

export default TabLayout