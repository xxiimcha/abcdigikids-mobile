import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import * as Speech from 'expo-speech'; // Import speech synthesis from expo

const numbers = [
  { id: '1', image: require('../../assets/images/learn_numbers/1.png'), color: '#FF9A9E' },
  { id: '2', image: require('../../assets/images/learn_numbers/2.png'), color: '#FFB7B2' },
  { id: '3', image: require('../../assets/images/learn_numbers/3.png'), color: '#FFDAC1' },
  { id: '4', image: require('../../assets/images/learn_numbers/4.png'), color: '#E2F0CB' },
  { id: '5', image: require('../../assets/images/learn_numbers/5.png'), color: '#C7CEEA' },
  { id: '6', image: require('../../assets/images/learn_numbers/6.png'), color: '#FEC8D8' },
  { id: '7', image: require('../../assets/images/learn_numbers/7.png'), color: '#D4A5A5' },
  { id: '8', image: require('../../assets/images/learn_numbers/8.png'), color: '#A5D4AD' },
  { id: '9', image: require('../../assets/images/learn_numbers/9.png'), color: '#F6CDA7' },
  { id: '10', image: require('../../assets/images/learn_numbers/10.png'), color: '#A7D5F6' },
];

const Numbers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    // Speak the current number when it changes
    Speech.speak(numbers[currentIndex].id);
  }, [currentIndex]);

  const handleSwipe = (direction) => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prevIndex) =>
        direction === 'left' && currentIndex < numbers.length - 1
          ? prevIndex + 1
          : direction === 'right' && currentIndex > 0
          ? prevIndex - 1
          : prevIndex
      );
      animatedValue.setValue(0);
    });
  };

  const cardScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  return (
    <View style={styles.container}>
      <GestureRecognizer
        onSwipeLeft={() => handleSwipe('left')}
        onSwipeRight={() => handleSwipe('right')}
        style={[styles.fullScreenGesture, { backgroundColor: numbers[currentIndex].color }]}
      >
        <Animated.View style={[styles.flashcard, { transform: [{ scale: cardScale }] }]}>
          <Image source={numbers[currentIndex].image} style={styles.image} />
        </Animated.View>
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  fullScreenGesture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  flashcard: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
});

export default Numbers;
