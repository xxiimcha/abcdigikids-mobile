import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('parent@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = () => {
    const defaultEmail = 'parent@example.com';
    const defaultPassword = 'password123';

    if (email === defaultEmail && password === defaultPassword) {
      Alert.alert('Success', 'You have logged in successfully!');
      // Navigate to the BottomNavBar after login
      navigation.navigate('BottomNavBar');   // Make sure the name matches in App.js
    } else {
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupLink}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',  // Light background color for child-friendliness
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff416c',  // Playful pink color
  },
  input: {
    borderWidth: 2,
    borderColor: '#ff9a9e',
    padding: 15,
    borderRadius: 20,  // Rounded corners for a softer feel
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#ff416c',  // Playful pink color
    paddingVertical: 15,
    borderRadius: 30,  // Rounded button for a playful look
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  linkText: {
    color: '#ff416c',
    fontWeight: 'bold',
  },
});

export default Login;
