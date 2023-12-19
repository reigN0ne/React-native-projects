import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'
import Markdown from 'react-native-markdown-display';
import MarkdownDisplay from '@components/day3/MarkdownDisplay';

const template = `# Markdown Editor

Hello **World**
`;

const EditorScreen = () => {
    const [content, setContent] = useState(template);
    const [tab, setTab] = useState('edit')

    return (
        <View style={styles.page}>
            <View style={styles.tabsContainer}>
                <Pressable onPress={() => setTab('edit')} style={[
                    styles.tab, 
                    {borderColor: tab === 'edit' ? 'green' : 'gray'}]}>
                    <Text style={styles.tabText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => setTab('preview')} style={[
                    styles.tab, 
                    {borderColor: tab === 'preview' ? 'green' : 'gray'}]}>
                    <Text style={styles.tabText}>Preview</Text>
                </Pressable>
            </View>
            {tab === 'edit' ? (
                <TextInput 
                    value={content} 
                    onChangeText={setContent}
                    multiline
                    numberOfLines={50} 
                    style={styles.input}
                />
            ): (
                <MarkdownDisplay>{content}</MarkdownDisplay>
            )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        padding: 10,
    },
    input : {
        backgroundColor: 'white',
        textAlignVertical: 'top',
        flex: 1,
        borderRadius: 20,
        paddingTop: 20,
        fontSize: 16,
    },
    tabsContainer : {
        flexDirection: 'row',
        gap: 10, 
        marginVertical: 10,
    },
    tab: {
        padding: 10,
        borderColor: 'gray',
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center'
    },
    tabText : {
        fontFamily: 'InterSemiBold'
    }
})

export default EditorScreen
