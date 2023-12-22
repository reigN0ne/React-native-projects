import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const AppartmentListItem = ({appartment}) => {
    // console.warn(appartment);
    return (
        <View style={styles.card}>
            <Image source={{uri: appartment.image}} style={styles.image}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{appartment.title}</Text>
                <Text style={styles.description}>
                    Stay at this apartment for an affordable price
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>$ {appartment.price} night</Text>
                    <Text style={styles.price}>★ {appartment.rating} ({appartment.numberOfStars})</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        // position: 'absolute',
        // bottom: 70,
        // padding: 10,
        // left: 10,
        // right: 10,
        
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden',
    },
    rightContainer: {
        padding: 10,
        flex: 1
    },
    title: {
        fontFamily: "InterSemiBold",
        marginBottom: 10,
        fontSize: 16,
    },
    image: {
        width: 150,
        aspectRatio: 1,
        borderRadius: 20,
    },
    price: {
        fontFamily: 'InterSemiBold'
    },
    description: {
        color: 'gray'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'
    }
})

export default AppartmentListItem
