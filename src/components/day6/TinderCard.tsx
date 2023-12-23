import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const profile = {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg',
    name: 'Dani'
}

export const tinderCardWidth = Dimensions.get('screen').width * 0.8;

const TinderCard = () => {
    return (
        <View style={styles.card}>
            {/* <Text>TinderCard</Text> */}
            <Image
                source={{ uri: profile.image}} 
                style={styles.image}
            />
            <Text style={styles.name}>{profile.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: tinderCardWidth,
        height: tinderCardWidth * 1.67
    },
    image: {
    },
    name: {}
})

export default TinderCard
