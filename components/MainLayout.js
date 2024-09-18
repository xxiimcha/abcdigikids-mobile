import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavBar from './BottomNavBar';  // Import your BottomNavBar

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {/* Render the child content (Play, Learn, etc.) */}
      <View style={styles.content}>
        {children}
      </View>
      
      {/* Render the bottom navigation bar */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;
