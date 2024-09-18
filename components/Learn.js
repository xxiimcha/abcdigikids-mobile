import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from './MainLayout';  // Import MainLayout

const Learn = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Learn New Things!</Text>

        {/* NUMBER */}
        <TouchableOpacity 
          style={[styles.categoryButton, { backgroundColor: '#FF9A9E' }]} 
          onPress={() => navigation.navigate('Numbers')}  // Navigate to Numbers page
        >
          <Text style={styles.buttonText}>NUMBERS</Text>
        </TouchableOpacity>

        {/* COLORS */}
        <TouchableOpacity 
          style={[styles.categoryButton, { backgroundColor: '#FFB7B2' }]} 
          onPress={() => navigation.navigate('Colors')}  // Navigate to Colors page
        >
          <Text style={styles.buttonText}>COLORS</Text>
        </TouchableOpacity>

        {/* SHAPES */}
        <TouchableOpacity 
          style={[styles.categoryButton, { backgroundColor: '#FFDAC1' }]} 
          onPress={() => navigation.navigate('Shapes')}  // Navigate to Shapes page
        >
          <Text style={styles.buttonText}>SHAPES</Text>
        </TouchableOpacity>

        {/* LETTERS */}
        <TouchableOpacity 
          style={[styles.categoryButton, { backgroundColor: '#E2F0CB' }]} 
          onPress={() => navigation.navigate('Letters')}  // Navigate to Letters page
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
    fontSize: 26,  // Slightly larger font size
    fontWeight: 'bold',
    marginBottom: 30,  // Increased margin to give more space
    color: '#333',
  },
  categoryButton: {
    width: '80%',
    paddingVertical: 25,  // Increased padding for better touch experience
    borderRadius: 30,  // Slightly more rounded buttons
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,  // Added more space between buttons
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  buttonText: {
    fontSize: 20,  // Larger text to make it more child-friendly
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Learn;
