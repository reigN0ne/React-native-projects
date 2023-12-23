import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { Link, Stack } from 'expo-router'
import React from 'react'
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
**Tinder Swipe Animation**
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{
                title: 'Day 6: Tinder Swipe Animation'
            }}/>
            <MarkdownDisplay>{description}</MarkdownDisplay>
            <Link href="/day6/tinder" asChild>
                <Button title="Go to Tinder Swipe Animation" />
            </Link>
        </SafeAreaView>
    )
}

export default DayDetailsScreen
