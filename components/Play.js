// Play.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from './MainLayout';  // Import MainLayout
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Play = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Choose a Category</Text>

        {/* NUMBERS */}
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: '#FF9A9E' }]}
          onPress={() => navigation.navigate('GameSelection')} // Navigate to GameSelection screen
        >
          <Text style={styles.buttonText}>NUMBERS</Text>
        </TouchableOpacity>

        {/* SHAPES */}
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: '#FFB7B2' }]}
          onPress={() => navigation.navigate('Shapes')}
        >
          <Text style={styles.buttonText}>SHAPES</Text>
        </TouchableOpacity>

        {/* COLORS */}
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: '#FFDAC1' }]}
          onPress={() => navigation.navigate('Colors')}
        >
          <Text style={styles.buttonText}>COLORS</Text>
        </TouchableOpacity>

        {/* LETTERS */}
        <TouchableOpacity
          style={[styles.categoryButton, { backgroundColor: '#E2F0CB' }]}
          onPress={() => navigation.navigate('Letters')}
        >
          <Text style={styles.buttonText}>LETTERS</Text>
        </TouchableOpacity>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  categoryButton: {
    width: '80%',
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Play;
