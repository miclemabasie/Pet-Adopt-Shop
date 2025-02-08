import { View, Text, StyleSheet,FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { db } from '../../config/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import Colors from "../../constants/Colors"


const Category = () => {
  const [categories, setCategories ] = useState([])
  const getCategories = async () => {
    setCategories([])
        try {
            const snapshot = await getDocs(collection(db, "Category"));
            snapshot.forEach((doc) => {
                setCategories(categories => [...categories, doc.data()])
            })
        } catch (error) {
            
      }
  };

  

  const renderItem = ({ item }) => (
    <View style={{
      flex: 1,
      borderRadius: 20,
    }}>
    <View style={styles.categoryBox}>
      <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
      
    </View>
      <Text style={{
        textAlign: "center",
        fontFamily: "outfit",
        fontSize: 18
      }}>{item.name}</Text>
    </View>
  );
  React.useEffect(() => {
    getCategories();
  }, []);
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categorySectionTitle}>Categories</Text>
      
      <View style={styles.categoryListBox}>
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
    backgroundColor: Colors.PRIMARY,
    padding: 5,
    borderWidth: 2,
    borderColor: "#7d5f05",
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
  // row: {
  //   justifyContent: 'space-between',
  // },
})