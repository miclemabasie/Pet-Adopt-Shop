import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo'
import PetProps from '../../components/PetDetails/PetProps'
import PetOwnerDetail from '../../components/PetDetails/PetOwnerDetail'
import AboutPet from '../../components/PetDetails/AboutPet'
import Colors from '../../constants/Colors'
import PetDetailBoxes from '../../components/PetDetails/PetDetailBoxes'

const PetDetails = () => {
    const router = useRouter();
    const { petItem } = useLocalSearchParams();
    const pet = JSON.parse(petItem); // Convert string back to object

  return (
    <>
    

        {/* Pet info */}
        <PetInfo pet={pet}/>
        <ScrollView style={styles.container}>

        {/* pert Propeties */}
        <PetProps pet={pet}/>

        {/* apet specs */}
        <PetDetailBoxes pet={pet}/>

        {/* about pet */}
        <AboutPet pet={pet}/>
        

        {/* owner's details */}
        <PetOwnerDetail pet={pet} />

        <View style={{marginTop: 40}}></View>
        </ScrollView>

       
        {/* Adopt Pet button */}
        <TouchableOpacity style={styles.adoptButton}
        onPress={() => router.push({
            pathname: "/add-pet",
            params:pet
        })}
        >
        <Text style={styles.adoptButtonText}>Adopt Me</Text>
        </TouchableOpacity>
     
        </>
  )
}

export default PetDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0f0',
    marginTop: 30,
    padding: 20
  },
  adoptButton: {
    backgroundColor: Colors.PRIMARY,

    padding: 16,
    alignItems: 'center',
  },
  adoptButtonText: {
    fontSize: 18,
    fontFamily: 'outfit-bold',
    color: '#fff',
  },
});