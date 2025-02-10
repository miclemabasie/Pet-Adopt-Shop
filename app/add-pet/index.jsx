import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from 'firebase/firestore'; // If using Firestore
import { db } from '../../config/FirebaseConfig'; // Adjust the path to your Firebase config
import { Ionicons } from '@expo/vector-icons'; // For the back button

// Validation schema using Yup
const petSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
  breed: Yup.string().required('Breed is required'),
  category: Yup.string().required('Category is required'),
  imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
});

const AddNewPet = ({ navigation }) => {
  const [imagePreview, setImagePreview] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (values) => {
    try {
      // Add the new pet to Firestore
      const docRef = await addDoc(collection(db, 'Pets'), values);
      console.log('Pet added with ID: ', docRef.id);
      Alert.alert('Success', 'Pet added successfully!');
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error('Error adding pet: ', error);
      Alert.alert('Error', 'Failed to add pet. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Pet</Text>
      </View>

      {/* Form */}
      <Formik
        initialValues={{ name: '', age: '', breed: '', category: '', imageUrl: '' }}
        validationSchema={petSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            {/* Name Field */}
            <Text style={styles.label}>Pet Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pet name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            {/* Age Field */}
            <Text style={styles.label}>Pet Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pet age"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              keyboardType="numeric"
            />
            {touched.age && errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

            {/* Breed Field */}
            <Text style={styles.label}>Pet Breed</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pet breed"
              onChangeText={handleChange('breed')}
              onBlur={handleBlur('breed')}
              value={values.breed}
            />
            {touched.breed && errors.breed && <Text style={styles.errorText}>{errors.breed}</Text>}

            {/* Category Field */}
            <Text style={styles.label}>Pet Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pet category (e.g., Dog, Cat)"
              onChangeText={handleChange('category')}
              onBlur={handleBlur('category')}
              value={values.category}
            />
            {touched.category && errors.category && <Text style={styles.errorText}>{errors.category}</Text>}

            {/* Image URL Field */}
            <Text style={styles.label}>Pet Image URL</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter image URL"
              onChangeText={(text) => {
                handleChange('imageUrl')(text);
                setImagePreview(text); // Update image preview
              }}
              onBlur={handleBlur('imageUrl')}
              value={values.imageUrl}
            />
            {touched.imageUrl && errors.imageUrl && <Text style={styles.errorText}>{errors.imageUrl}</Text>}

            {/* Image Preview */}
            {imagePreview && (
              <Image source={{ uri: imagePreview }} style={styles.imagePreview} />
            )}

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Add Pet</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddNewPet;