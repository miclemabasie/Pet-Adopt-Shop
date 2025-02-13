import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'


// {/* Four Boxes Section */}
const PetDetailBoxes = ({ pet }) => {
  return (
    <View style={styles.boxesContainer}>
    <View style={styles.box}>
      <Text style={styles.boxLabel}>Age</Text>
      <Text style={styles.boxValue}>{pet.age} Yrs</Text>
    </View>
    <View style={styles.box}>
      <Text style={styles.boxLabel}>Breed</Text>
      <Text style={styles.boxValue}>{pet.breed}</Text>
    </View>
    <View style={styles.box}>
      <Text style={styles.boxLabel}>Sex</Text>
      <Text style={styles.boxValue}>{pet.sex}</Text>
    </View>
    <View style={styles.box}>
      <Text style={styles.boxLabel}>Weight</Text>
      <Text style={styles.boxValue}>25 Kg</Text>
    </View>
  </View>
  )
}

export default PetDetailBoxes

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
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
  },
  boxesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    width: '48%', // Two boxes per row
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  boxLabel: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'outfit-regular',
  },
  boxValue: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: Colors.PRIMARY,
    marginTop: 8,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    color: Colors.PRIMARY,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'outfit-regular',
    lineHeight: 20,
  },
  adoptButton: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  adoptButtonText: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: '#fff',
  },
});