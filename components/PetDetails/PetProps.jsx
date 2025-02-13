import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'


const PetProps = ({ pet }) => {
  return (
      <View style={styles.nameFavoriteContainer}>
        <View style={styles.nameAddressContainer}>
          <Text style={styles.petName}>{pet.name}</Text>
          <Text style={styles.petAddress}>123 Pet Street, Dogtown</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Favorite clicked')}>
          <Ionicons name="heart-outline" size={24} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>
  )
}

export default PetProps

const styles = StyleSheet.create({
  nameFavoriteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  nameAddressContainer: {
    flex: 1,
  },
  petName: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    color: Colors.PRIMARY,
    marginBottom: 4,
  },
  petAddress: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'outfit-regular',
  }
});