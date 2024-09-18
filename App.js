import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Learn from './components/Learn';
import Play from './components/Play';
import BottomNavBar from './components/BottomNavBar';
import Numbers from './components/numbers/Numbers';
import Talk from './components/Talk';  // Import Talk page
import Letters from './components/letters/Letters';  // Import Letters component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ title: 'Signup' }} 
        />
        <Stack.Screen 
          name="BottomNavBar" 
          component={BottomNavBar} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Learn" 
          component={Learn}  
          options={{ title: 'Learn' }} 
        />
        <Stack.Screen 
          name="Play" 
          component={Play}   
          options={{ title: 'Play' }} 
        />
        <Stack.Screen 
          name="Talk"  
          component={Talk}  
          options={{ title: 'Talk' }} 
        />
        <Stack.Screen 
          name="Numbers" 
          component={Numbers} 
          options={{ title: 'Numbers' }} 
        />
        <Stack.Screen 
          name="Letters"    // Register the Letters screen
          component={Letters}  
          options={{ title: 'Letters' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
