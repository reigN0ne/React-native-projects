import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const OnboardingScreen = () => {
    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.pageContent}>
                <FontAwesome5 
                    name="people-arrows" 
                    size={100} 
                    color="#CEF202" 
                    style={styles.image}
                />
                <View style={styles.footer}>
                    <Text style={styles.title}>Save Better</Text>
                    <Text style={styles.description}>Monitor your spending and contribution, ensuring ever penny aligns with your family's aspirations</Text>
                
                    <View style={styles.buttonsRow}>
                        <Text style={styles.buttonText}>
                            Skip
                        </Text>
                        <Link href={'/day2/onboarding2'} asChild>
                            <Pressable style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141A',
    },
    pageContent: {
        padding: 20,
        flex:1,
    },
    title: {
        color: '#FDFDFD',
        fontSize: 40,
        fontFamily: 'Inter',
        letterSpacing: 1.4,
        alignSelf: 'center',
    },
    description: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'InterRegular',
        marginVertical: 20,
        lineHeight: 28
    },
    image: {
        alignSelf: 'center',
        margin: 20
    },
    footer: {
        marginTop: 'auto'
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    button: {
        backgroundColor: "#302E38",
        // padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        flex: 1
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'InterSemiBold',
        fontSize: 16,

        padding: 15,
        paddingHorizontal: 25,
    }
})

export default OnboardingScreen;