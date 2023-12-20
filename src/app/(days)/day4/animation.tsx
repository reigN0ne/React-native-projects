import React, { useRef } from 'react';
import { View, Text, Button } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
        }}>
            <LottieView 
                autoPlay
                ref={animation}
                style={
                    {
                        width: '80%',
                        maxWidth: 500,
                        // height: 200,
                        // backgroundColor: "#eee"
                    }
                }
                source={require('@assets/lottie/netflix.json')}
            />
            {/* <Button title='Play' onPress={() => animation.current?.play()}/>
            <Button title='Pause' onPress={() => animation.current?.pause()}/>
            <Button title='Reset' onPress={() => animation.current?.reset()}/> */}
        </View>
    )
}

export default AnimationScreen;
