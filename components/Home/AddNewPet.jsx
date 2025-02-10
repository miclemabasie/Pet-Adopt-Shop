import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { router } from 'expo-router';


const AddNewPet = () => {
  return (
    <TouchableOpacity
      onPress={() => router.push({
        pathname: "/add-pet",
        params: {d:1}
      })}
     style={styles.container}>
      <MaterialIcons name="pets" size={20} color={Colors.PRIMARY} />
      <Text style={styles.text}>Add New Pet</Text>
    </TouchableOpacity>
  );
};

export default AddNewPet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    borderRadius: 20,
    backgroundColor: '#ede0a7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#c5a516',
  },
  text: {
    color: Colors.PRIMARY,
    fontFamily: 'outfit-medium',
    fontSize: 20,
  },
});