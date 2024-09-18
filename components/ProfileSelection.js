import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';  // Importing icons

const ProfileSelection = ({ navigation }) => {
  const profiles = [
    { name: 'Parent', icon: 'user' },        // FontAwesome user icon
    { name: 'Child 1', icon: 'child' },      // FontAwesome child icon
    { name: 'Child 2', icon: 'baby' },       // FontAwesome baby icon
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's Watching?</Text>
      <View style={styles.profilesContainer}>
        {profiles.map((profile, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.profileButton}
            onPress={() => navigation.navigate('Home', { profileName: profile.name })}  // Navigate to Home
          >
            <FontAwesome5 name={profile.icon} size={60} color="#ff416c" />   {/* Icon */}
            <Text style={styles.profileName}>{profile.name}</Text>           {/* Text component for name */}
          </TouchableOpacity>
        ))}
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff416c',
  },
  profilesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  profileButton: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});

export default ProfileSelection;
