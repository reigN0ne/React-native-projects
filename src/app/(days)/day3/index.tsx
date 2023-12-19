import { Link, Stack } from 'expo-router'
import React from 'react'
import { View, Text, Button } from 'react-native'

const DayDetailsScreen = () => {
    return (
        <View>
            <Stack.Screen options={{
                title: 'Day 3: Markdown'
            }}/>

            <Link href="/day3/editor" asChild>
                <Button title="Go to Editor" />
            </Link>
        </View>
    )
}

export default DayDetailsScreen
