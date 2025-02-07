import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { useUser } from '@clerk/clerk-expo'


const Index = () => {
  const user = useUser();
  
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }}>
      {user ? <Redirect href={"/home"} /> :  
      <Redirect href={"/login"} />
    }
    </View>
  )
}

export default Index