import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // For the favorite icon
import Colors from '../../constants/Colors'; // Assuming you have a Colors file

const PetInfo = ({ pet }) => {
  
  return (
    <ScrollView>
      {/* Image Section */}
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />

      {/* Name, Address, and Favorite Icon Section */}
      <View style={styles.nameFavoriteContainer}>
        <View style={styles.nameAddressContainer}>
          <Text style={styles.petName}>{pet.name}</Text>
          <Text style={styles.petAddress}>123 Pet Street, Dogtown</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Favorite clicked')}>
          <Ionicons name="heart-outline" size={24} color={Colors.PRIMARY} />
        </TouchableOpacity>
      </View>

      {/* Four Boxes Section */}
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

      {/* About Section */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>{pet.about}</Text>
      </View>

      {/* Adopt Me Button */}
      <TouchableOpacity style={styles.adoptButton}>
        <Text style={styles.adoptButtonText}>Adopt Me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PetInfo;

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