import React from 'react';
import { View, Animated } from 'react-native';

const Soundwave = ({ amplitude }) => {
  const animatedHeight = new Animated.Value(amplitude);

  Animated.timing(animatedHeight, {
    toValue: amplitude,
    duration: 100,
    useNativeDriver: false,
  }).start();

  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(5).keys()].map((_, index) => (
        <Animated.View
          key={index}
          style={{
            width: 10,
            height: animatedHeight,
            backgroundColor: 'blue',
            marginHorizontal: 2,
          }}
        />
      ))}
    </View>
  );
};

export default Soundwave;
