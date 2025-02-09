import { View, Text, StyleSheet,FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Colors from "../../constants/Colors"


const Category = ({setSelectedCategory, selectedCategory}) => {
  const [categories, setCategories ] = useState([])

  

  const getCategories = async () => {
    setCategories([])
        try {
            const snapshot = await getDocs(collection(db, "Category"));
            snapshot.forEach((doc) => {
                setCategories(categories => [...categories, doc.data()])
            })
        } catch (error) {
          console.log(error)
      }
  };  

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{
      flex: 1,
      borderRadius: 20,
    }}
    onPress={() => setSelectedCategory(item.name)}
    >
    <View style={[styles.categoryBox, selectedCategory==item.name&&styles.selectedCategory]}>
      <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
      
    </View>
      <Text style={{
        textAlign: "center",
        fontFamily: "outfit",
        fontSize: 18
      }}>{item.name}</Text>
    </TouchableOpacity>
  );


  React.useEffect(() => {
    getCategories();

  }, []);




  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categorySectionTitle}>Categories</Text>
      
      <View>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          columnWrapperStyle={styles.row}
         
          
        />
        </View>

        
    
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 20,
  }, 
  categorySectionTitle: {
    fontFamily: 'outfit-medium',
    fontSize: 20
  },

  categoryBox: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    padding: 5,
    borderWidth: 2,
    borderColor: Colors.SECONDARY,
    borderRadius: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },


  categoryName: {
    marginTop: 10,
    fontFamily: 'outfit-regular',
    fontSize: 16,
  },

  selectedCategory:  {
    backgroundColor: "#3d83e4",
    borderWidth: 2,
    borderColor: "#3d83e4",
  },
  
  petItemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    padding: 10,
    borderWidth: 2,
    borderColor: "#7d5f05",
    borderRadius: 10,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  petName: {
    marginTop: 10,
    fontFamily: 'outfit-regular',
    fontSize: 16,
    textAlign: 'center',
  },
})