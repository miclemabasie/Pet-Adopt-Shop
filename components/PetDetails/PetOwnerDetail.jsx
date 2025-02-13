import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'


const PetOwnerDetail = ( { pet }) => {


  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: Colors.PRIMARY,
      borderRadius: 10,
      padding: 10,
      backgroundColor: "#f5f5f5"
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        gap:20
      }}>
        <View>
          <Image source={{uri: pet.user.imageUrl}} style={styles.userImage}/>
        </View>
        <View>
          <Text style={{fontFamily: "outfit-bold"}}>{pet.user.name}</Text>
          <Text style={{fontFamily: "outfit", color: Colors.GRAY}}>Pet Owner</Text>
        </View>

      </View>

      <TouchableOpacity style={{
          justifyContent: "center",
          rotation: 4
        }}
      onPress={() => console.log("messaging the owner")}  
      >
        <Ionicons name="send-sharp" size={24} color={Colors.PRIMARY} />

  </TouchableOpacity>
    </View>
  )
}

export default PetOwnerDetail

const styles = StyleSheet.create({
 

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50
  }
});