import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Marker } from 'react-native-maps';

const CustomMarker = ({ appartment, onPress }) => {
    return (
        <Marker 
            onPress={onPress}
            coordinate={{
                latitude: appartment.latitude,
                longitude: appartment.longitude
            }}
            title={appartment.title}
            description="Hello there!"
        >
            <View style={styles.mapPriceContainer}>
                <Text style={styles.mapPrice}>$ {appartment.price}</Text>
            </View>
        </Marker>
    )
}

const styles = StyleSheet.create({
    mapPriceContainer: {
        backgroundColor: 'white',
        padding: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20
    },
    mapPrice: {
        fontFamily: 'InterSemiBold'
    }
})

export default CustomMarker
