import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { Link, Stack } from 'expo-router'
import React from 'react'
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Markdown

Integrate Markdown content in **React Native**
`;

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
            <Stack.Screen options={{
                title: 'Day 3: Markdown'
            }}/>
            <MarkdownDisplay>{description}</MarkdownDisplay>
            <Link href="/day3/editor" asChild>
                <Button title="Go to Editor" />
            </Link>
        </SafeAreaView>
    )
}

export default DayDetailsScreen
