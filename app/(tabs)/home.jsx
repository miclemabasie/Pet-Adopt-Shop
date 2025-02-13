import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PetsList from '../../components/Home/PetsList'
import AddNewPet from '../../components/Home/AddNewPet'
import PetListByCategory from '../../components/Home/PetListByCategory'
import { useRouter } from 'expo-router'


const Home = () => {

  const router = useRouter();

  const handleUpload = () => {
    router.push({
      pathname: "/uploads",
    })
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      
      {/* Slider */}
      <Slider />

      {/* Category */}
      <PetListByCategory />

      {/* Add a new pet */}
      <AddNewPet />

      <TouchableOpacity
      onPress={() => handleUpload()}
      style={{
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#c16a6a",
        marginTop: 40,
      }}
      >
        <Text>Click here to test multiple image uploads</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f0f0',
    marginTop: 30,
    padding: 20,
  },
});