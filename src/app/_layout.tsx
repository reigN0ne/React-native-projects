import { Stack } from 'expo-router';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { MountainsofChristmas_400Regular, MountainsofChristmas_700Bold } from '@expo-google-fonts/mountains-of-christmas';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AnimatedSplashScreen from '@/components/day4/AnimatedSplashScreen';
import Animated, { FadeIn } from 'react-native-reanimated';

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    const [fontsLoaded, error] = useFonts({
        Inter: Inter_900Black,
        InterRegular: Inter_400Regular,
        InterSemiBold: Inter_600SemiBold,
        Christmas: MountainsofChristmas_400Regular,
        ChristmasBold: MountainsofChristmas_700Bold,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
    });
        
        useEffect(() => {
            if (fontsLoaded || error) {
                // SplashScreen.hideAsync();
                setAppReady(true);
            }
        }, [fontsLoaded, error]);

        const showAnimatedSplash = !appReady || !splashAnimationFinished;
        
        if (showAnimatedSplash) {
            return (
                <AnimatedSplashScreen onAnimationFinish={
                    () => setSplashAnimationFinished(true)
                }/>
            )
        }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Animated.View style={{ flex: 1 }} entering={FadeIn}>
                <Stack 
                    screenOptions={{  
                        headerStyle: { backgroundColor: '#696969'},
                    }} 
                >
                    <Stack.Screen name='index' options={
                        {title: 'Home Screen',}
                    }/>
                </Stack>
            </Animated.View>
        </GestureHandlerRootView>
    )
}

export default RootLayout;