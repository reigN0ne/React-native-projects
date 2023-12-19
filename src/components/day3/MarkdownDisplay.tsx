import React, { PropsWithChildren } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Markdown from 'react-native-markdown-display';

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
    return (
        <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
            <Markdown style={markdownStyles}>{children}</Markdown>
        </ScrollView>
    )
}

const markdownStyles = StyleSheet.create({
    heading1: {
        fontFamily: 'Inter',
        color: '#212020',

        marginBottom: 10,
        marginTop: 5,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'InterSemiBold',
        color: '#404040',
                
        marginBottom: 10,
        marginTop: 5,
        lineHeight: 30,
    },
    body: {
        fontSize: 16,
        fontFamily: 'InterRegular',
        lineHeight: 24,
    }
})

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
        margin: 10,
    }
})

export default MarkdownDisplay;