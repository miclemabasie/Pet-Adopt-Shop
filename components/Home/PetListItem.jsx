import { View, Text } from 'react-native'
import React from 'react'

const PetListItem = () => {
  return <View style={styles.container}>
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
}

export default PetListItem