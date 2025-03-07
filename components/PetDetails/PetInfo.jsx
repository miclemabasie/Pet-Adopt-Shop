import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // For the favorite icon
import Colors from '../../constants/Colors'; // Assuming you have a Colors file

const PetInfo = ({ pet }) => {
  
  return (
    <ScrollView>
      {/* Image Section */}
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />


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