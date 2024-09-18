import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from './MainLayout';  // Import MainLayout

const Talk = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Talk!</Text>
        <Text style={styles.description}>Engage in exciting conversations right away.</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Talk;
