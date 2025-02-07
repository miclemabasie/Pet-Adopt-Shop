import { View, Text, SafeAreaView, StyleSheet , Image} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Header = () => {
    const {user} = useUser();
    console.log(user.username)
  return (
    <View style={styles.headerContainer}>
        <View style={styles.headerInformation}>
            <Text style={styles.welcomeText}>Welcome, </Text>
            <Text style={styles.username}>{user?.fullName || "User"}</Text>
      </View>
      <Image source={{uri: user?.imageUrl}} 
        style={styles.userImage}
      />
    </View>
  )
  
}

export default Header

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    headerInformation: {
        flexDirection: "col",
        justifyContent: "space-between"
    },

    welcomeText: {
        fontFamily: "outfit",
        fontSize: 18
    },

    username: {
        fontFamily: "outfit-medium",
        fontSize: 25
    },

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 99
    }
})