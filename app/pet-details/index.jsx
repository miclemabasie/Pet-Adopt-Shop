import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import PetInfo from '../../components/PetDetails/PetInfo'

const PetDetails = () => {
    const item = useLocalSearchParams();
  return (
    <View>
        {/* Pet info */}
        <PetInfo pet={item}/>

        {/* pert Propeties */}

        {/* about pet */}

        {/* owner's details */}

        {/* Adopt Pet button */}
    </View>
  )
}

export default PetDetails