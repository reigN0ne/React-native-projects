import { Stack } from 'expo-router';
import React from 'react'
import { View, Text } from 'react-native';

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{ title: "Day 1"}} />
            <Text>Day Details Screen</Text>
        </View>
    )
}

export default DayDetailsScreen;
