// GameSelection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GameSelection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Number Game</Text>

      {/* Matching Game */}
      <TouchableOpacity
        style={styles.gameButton}
        onPress={() => navigation.navigate('NumberMatchingGame')}
      >
        <Text style={styles.gameText}>Number Matching Game</Text>
      </TouchableOpacity>

      {/* Tracing Game */}
      <TouchableOpacity
        style={styles.gameButton}
        onPress={() => navigation.navigate('NumberTracingGame')}
      >
        <Text style={styles.gameText}>Number Tracing Game</Text>
      </TouchableOpacity>

      {/* Quiz Game */}
      <TouchableOpacity
        style={styles.gameButton}
        onPress={() => navigation.navigate('NumberQuizGame')}
      >
        <Text style={styles.gameText}>Number Quiz Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  gameButton: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  gameText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameSelection;
