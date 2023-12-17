import { Link, Stack } from 'expo-router'
import React from 'react'
import { View, Text, Button } from 'react-native'

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{
                title: 'Day 2: Onboarding'
            }}/>

            <Link href="/day2/onboarding" asChild>
                <Button title="Go to Onboarding" />
            </Link>
        </View>
    )
}

export default DayDetailsScreen
