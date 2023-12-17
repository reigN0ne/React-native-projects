// import { Slot } from 'expo-router'
import { Stack } from 'expo-router';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { MountainsofChristmas_400Regular, MountainsofChristmas_700Bold } from '@expo-google-fonts/mountains-of-christmas';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        Inter: Inter_900Black,
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
        <Stack 
            screenOptions={{  
                headerStyle: { backgroundColor: '#696969'},
            }} 
        >
            <Stack.Screen name='index' options={
                {title: 'Home Screen',}
            }/>
        </Stack>
    )
}

export default RootLayout;