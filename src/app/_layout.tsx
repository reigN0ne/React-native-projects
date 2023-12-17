// import { Slot } from 'expo-router'
import { Stack } from 'expo-router';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter';
import { MountainsofChristmas_400Regular, MountainsofChristmas_700Bold } from '@expo-google-fonts/mountains-of-christmas';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
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
                // return <ActivityIndicator />
                SplashScreen.hideAsync();
            }
        }, [fontsLoaded, error]);

        if (!fontsLoaded && !error){
            return null;
        }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Stack 
                screenOptions={{  
                    headerStyle: { backgroundColor: '#696969'},
                }} 
            >
                <Stack.Screen name='index' options={
                    {title: 'Home Screen',}
                }/>
            </Stack>
        </GestureHandlerRootView>
    )
}

export default RootLayout;