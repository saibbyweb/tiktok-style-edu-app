import {useRef} from 'react';
import {Animated} from 'react-native';

export const useFlipAnimation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const ANIMATION_DURATION = 500;

  const flipAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(0);
    });
  };

  const rotateInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const flippingStyles = {
    backfaceVisibility: 'hidden',

    transform: [{rotateY: rotateInterpolate}],
  };

  return {
    flipAnimation,
    flippingStyles,
    ANIMATION_DURATION,
  };
};
