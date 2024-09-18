import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* PLAY Button */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Play')}>
        <MaterialIcons name="gamepad" size={28} color="gray" />
        <Text style={styles.navText}>PLAY</Text>
      </TouchableOpacity>

      {/* TALK Button */}
      <View style={styles.talkButtonContainer}>
        <TouchableOpacity style={styles.talkButton} onPress={() => navigation.navigate('Talk')}>
          <MaterialIcons name="mic" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* LEARN Button */}
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Learn')}>
        <MaterialIcons name="school" size={28} color="gray" />
        <Text style={styles.navText}>LEARN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  talkButtonContainer: {
    position: 'relative',
    top: -25,
  },
  talkButton: {
    backgroundColor: '#ff416c',
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default BottomNavBar;
