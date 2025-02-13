import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'


const AboutPet = ({ pet }) => {
  return (
    <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About {pet.name}</Text>
        <Text style={styles.aboutText}>{pet.about}</Text>
        
    </View>
  )
}

export default AboutPet

const styles = StyleSheet.create({
 
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
    fontFamily: 'outfit-medium',
    lineHeight: 20,
  },
 
});