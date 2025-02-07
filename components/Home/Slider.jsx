import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { collection, getDoc, getDocs } from 'firebase/firestore'


const Slider = () => {

    // fetch sliders from the database
    const [sliderList, setSliderList] = useState([])
    const getSliders = async () => {
      setSliderList([])
        try {
            const snapshot = await getDocs(collection(db, "Sliders"));
            snapshot.forEach((doc) => {
                setSliderList(sliderList => [...sliderList, doc.data()])
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getSliders();
    }, [])


  return (
    <View style={styles.sliderContainer}>
      <FlatList 
      data={sliderList}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={{uri: item.imageUrl}} 
          style={styles.sliderImage}/>
        </View>
      )}
      />
    </View>
  )
}

export default Slider


const styles = StyleSheet.create({

  sliderContainer: {
    marginTop: 20
  },

  sliderImage: {
    width: Dimensions.get('screen').width*0.8,
    height: 160,
    borderRadius: 20,
    marginRight: 10
  }
})