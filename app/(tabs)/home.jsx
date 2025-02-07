import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PetsList from '../../components/Home/PetsList'
import AddNewPet from '../../components/Home/AddNewPet'

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      
      {/* Slider */}
      <Slider />

      {/* Category */}
      {/* <Category /> */}

      {/* list of pets */}
      {/* <PetsList />  */}

      {/* Add a new pet */}
      {/* <AddNewPet /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 20
  },
});