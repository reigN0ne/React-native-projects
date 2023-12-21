import React, { useMemo, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Stack } from 'expo-router';
import appartments from '@assets/data/day5/appartments.json';
import CustomMarker from '@/components/day5/CustomMarker';
import AppartmentListItem from '@/components/day5/AppartmentListItem';
import BottomSheet from '@gorhom/bottom-sheet';

const AirbnbScreen = () => {
    const [selectedAppartment, setSelectedAppartment] = useState(false);
    const snapPoints = useMemo(() => ['25%', '50%'], [])
    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                {
                    appartments.map((appartment) => (
                        <CustomMarker 
                            key={appartment.id} 
                            appartment={appartment} 
                            onPress={() => setSelectedAppartment(appartment)}
                        />
                    ))
                }
            </MapView>
            {selectedAppartment && <BottomSheet
                index={0}
                snapPoints={snapPoints}
            >   
                <AppartmentListItem appartment={selectedAppartment} />
            </BottomSheet>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
})

export default AirbnbScreen
