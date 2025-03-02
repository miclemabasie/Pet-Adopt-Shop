import React, { useState } from "react";
import { View, Button, TextInput, Image, ScrollView, Alert, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const UploadCarScreen = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const uploadCar = async () => {
    if (!make || !model || !price || images.length === 0) {
      Alert.alert("Error", "Please fill all fields and select images");
      return;
    }

    const formData = new FormData();
    formData.append("make", make);
    formData.append("model", model);
    formData.append("price", price);
    images.forEach((img, index) => {
      formData.append("images", {
        uri: img.uri,
        name: `image_${index}.jpg`,
        type: "image/jpeg",
      });
    });
    console.log("form data", formData)
    try {
      const response = await axios.post("https://1f72-102-244-157-99.ngrok-free.app/api/cars/create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Alert.alert("Success", "Car uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      Alert.alert("Error", "Upload failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Make" value={make} onChangeText={setMake} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Model" value={model} onChangeText={setModel} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <Button title="Pick Images" onPress={pickImages} />
      <ScrollView horizontal>
        {images.map((img, index) => (
          <View key={index} style={{ position: "relative", margin: 5 }}>
            <Image source={{ uri: img.uri }} style={{ width: 100, height: 100 }} />
            <TouchableOpacity
              style={{ position: "absolute", top: 5, right: 5, backgroundColor: "red", borderRadius: 10, paddingHorizontal: 5, paddingVertical: 2}}
              onPress={() => removeImage(index)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Button title="Upload Car" onPress={uploadCar} />
    </View>
  );
};

export default UploadCarScreen;
