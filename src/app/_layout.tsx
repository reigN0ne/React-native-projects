// import { Slot } from 'expo-router'
import { Stack } from 'expo-router';

const RootLayout = () => {
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