import React, { useMemo, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Stack } from 'expo-router';
import appartments from '@assets/data/day5/appartments.json';
import CustomMarker from '@/components/day5/CustomMarker';
import AppartmentListItem from '@/components/day5/AppartmentListItem';
import BottomSheet, { BottomSheetFlatList, useGestureEventsHandlersDefault } from '@gorhom/bottom-sheet';
import { FlatList, Gesture } from 'react-native-gesture-handler';

const AirbnbScreen = () => {
    const [selectedAppartment, setSelectedAppartment] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });

    // const gestureHandler = useGestureEventsHandlersDefault({
    //     handleOnActive: (source, payload, context) => {
    //         console.log('Active');
    //     }
    // })
    // const gestureHandle = Gesture.Pan()
    // .onBegin(
    //     (event) => console.log('Begin Pan')
    // )
    // .onUpdate(
    //     (event) => console.log('Update Pan')
    // )
    const gestureHandle = () => ({
        handleOnStart: () => {
            console.log(('Begin Pan'))
        },
        handleOnActive: () => {},
        handleOnEnd: () => {},
    })

    const snapPoints = useMemo(() => [75, '50%', '90%'], [])
    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView 
                style={styles.map}
                // initialRegion={mapRegion}
                region={mapRegion}
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
            {
                selectedAppartment && (
                    <View style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 10,
                        left: 10,
                    }}>
                        <AppartmentListItem appartment={selectedAppartment} />
                    </View>
                )
            }
            <BottomSheet 
                index={1}
                snapPoints={snapPoints}
                // onChange={(index) => console.log("Index", index)}
                // onAnimate={(from, to) => console.log("From " + from + 'To ' + to)}
                // gestureEventsHandlersHook={gestureHandle}
            >
                <View style={{ flex: 1 }}>
                    <Text style={styles.listTitle}>Over {appartments.length} places</Text>
                    <BottomSheetFlatList 
                        data={appartments}
                        contentContainerStyle={{
                            gap: 10, 
                            padding: 10
                        }}
                        renderItem={({item}) => 
                        <AppartmentListItem appartment={item}/>}
                    />
                </View>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    listTitle: {
        textAlign: 'center',
        fontFamily: 'InterSemiBold',
        fontSize: 16,
        marginVertical: 10,
        marginBottom: 20
    },
})

export default AirbnbScreen
