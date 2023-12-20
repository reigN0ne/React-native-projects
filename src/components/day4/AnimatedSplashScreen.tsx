import React, { useRef } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, {
    FadeIn,
    FadeOut,
    ZoomIn,
    ZoomOut,
} from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
    onAnimationFinish = () => {},
}: {
    onAnimationFinish?: () => void;
}) => {
    const animation = useRef<LottieView>(null);
    
    return (
        <View 
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}
        >
            <AnimatedLottieView
                exiting={ZoomOut} 
                autoPlay
                onAnimationFinish={onAnimationFinish}
                loop={false}
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
        </View>
    )
}

export default AnimatedSplashScreen;
