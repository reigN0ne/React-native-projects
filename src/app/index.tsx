import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../../src/components/core/DayListItem';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const days = [...Array(24)].map((val, index) => index+1);

export default function HomeScreen() {

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
