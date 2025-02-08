import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Category from './Category';
import Colors from '../../constants/Colors';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/FirebaseConfig';

const PetListByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cats");
  const [categoryPets, setCategoryPets] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading

  const getPetsByCategory = async (category) => {
    setLoading(true); // Start loading
    setCategoryPets([]);
    try {
      const snapshot = await getDocs(collection(db, "Pets"));
      const pets = [];
      snapshot.forEach((doc) => {
        if (doc.data().category === category) {
          pets.push(doc.data());
        }
      });
      setCategoryPets(pets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getPetsByCategory(selectedCategory);
  }, [selectedCategory]);

  const renderPetItem = ({ item }) => {
    return (
      <View style={styles.petItemContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.petImage} />
        <Text style={styles.petName}>{item.name}</Text>
        <View style={styles.petDetails}>
          <Text style={styles.petBreed}>{item.breed}</Text>
          <Text style={styles.petAge}>{item.age}Yrs</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Category setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      
      {loading ? ( // Show spinner if loading
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : (
        <FlatList
          data={categoryPets}
          renderItem={renderPetItem}
          keyExtractor={(item, index) => index.toString()}
          // refreshing={loading}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

export default PetListByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20, // Add padding to avoid cutting off the last items
  },
  petItemContainer: {
    width: "48%", // Each item takes up 48% of the screen width (leaving space for margins)
    margin: "1%", // 1% margin on each side to ensure spacing between items
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start', // Align content to the left
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  petImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  petName: {
    textAlign: "left", // Left-align the title
    fontFamily: "outfit-bold",
    fontSize: 16,
    marginBottom: 5,
  },
  petDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  petBreed: {
    color: "#ccc",
    fontSize: 14,
  },
  petAge: {
    color: "#a3970e",
    backgroundColor: "#f3e57c",
    borderRadius: 5,
    paddingHorizontal: 5,
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});