import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../../src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { MountainsofChristmas_400Regular, MountainsofChristmas_700Bold } from '@expo-google-fonts/mountains-of-christmas';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const days = [...Array(24)].map((val, index) => index+1);

export default function HomeScreen() {
  
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
    <View style={styles.container}>
      <FlatList 
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({item}) => (
          <DayListItem day={item}/>
        )}
        // horizontal -> for horizontal
      />

      {/* {
        days.map(day => (
          <View style={styles.box} key={day}>
            <Text style={styles.text}>{day}</Text>
          </View>
        ))
      } */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },
});
