import { Link, router, Stack } from 'expo-router';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated, { 
    FadeIn, 
    FadeOut, 
    SlideInLeft,
    SlideInRight,
    SlideOutLeft,
} from 'react-native-reanimated';

const onboardingSteps = [
    {
        title: "Welcome to the Hackathon!",
        description: "This is a react-native hackathon",
        icon: "book-reader"
    },
    {
        title: "Learn and grow your skills",
        description: "Understand and implement 24 projects and become a specialist in the field",
        icon: "mobile-alt"
    },
    {
        title: "Be future ready",
        description: "Ready to begin your career as a Mobile App developer? Join us now!",
        icon: "snowboarding"
    }
]

const OnboardingScreen = () => {
    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex];
    
    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1
        if (isLastScreen) {
            endOnboarding();
        }
        else{
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {
        const isFirstScreen = screenIndex === 0;
        if (isFirstScreen) {
            endOnboarding();
        }
        else{
            setScreenIndex(screenIndex - 1);
        }
    };

    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    }

    const swipeForward = Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue);
    const swipeBack = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);

    const swipes = Gesture.Simultaneous(swipeBack, swipeForward);

    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />
            <View style={styles.stepIndicatorContainer}>
                {/* <View style={styles.stepIndicator} />
                <View style={styles.stepIndicator} />
                <View style={styles.stepIndicator} /> */}
                {
                    onboardingSteps.map((step, index) => (
                        <View 
                            key={index}
                            style={[styles.stepIndicator, {
                                backgroundColor: index === screenIndex ? '#CEF202' : 'grey'
                            },
                        ]} />
                    ))
                }
            </View>
            <GestureDetector gesture={swipes}>
                <View
                    // exiting={BounceOutRight}    
                    style={styles.pageContent}
                    key={screenIndex}
                >
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5 
                            name={data.icon} 
                            size={100} 
                            color="#CEF202" 
                            style={styles.image}
                        />
                    </Animated.View>
                    <View style={styles.footer}>
                        <Animated.Text 
                            entering={SlideInRight.duration(200)}
                            exiting={SlideOutLeft}
                            style={styles.title}
                        >
                                {data.title}
                        </Animated.Text>
                        <Animated.Text 
                            entering={SlideInRight.delay(250)}
                            exiting={SlideOutLeft}
                            style={styles.description}
                        >
                            {data.description}
                        </Animated.Text>
                    
                        <View style={styles.buttonsRow}>
                            <Text onPress={endOnboarding} style={styles.buttonText}>
                                Skip
                            </Text>
                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>
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
        margin: 20, 
        marginTop: 70,
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
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 6,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1, 
        height: 5, 
        backgroundColor: 'gray',
        borderRadius: 10,
    },

})

export default OnboardingScreen;