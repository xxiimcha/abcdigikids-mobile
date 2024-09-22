// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Learn from './components/Learn';
import Play from './components/Play';
import GameSelection from './components/numbers/play/GameSelection';
import NumberMatchingGame from './components/numbers/play/NumberMatchingGame';
import NumberTracingGame from './components/numbers/play/NumberTracingGame';
import NumberQuizGame from './components/numbers/play/NumberQuizGame';
import BottomNavBar from './components/BottomNavBar';
import Numbers from './components/numbers/Numbers';
import Talk from './components/Talk';
import Letters from './components/letters/Letters';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} />
        <Stack.Screen name="BottomNavBar" component={BottomNavBar} options={{ headerShown: false }} />
        <Stack.Screen name="Learn" component={Learn} options={{ title: 'Learn' }} />
        <Stack.Screen name="Play" component={Play} options={{ title: 'Play' }} />
        <Stack.Screen name="Talk" component={Talk} options={{ title: 'Talk' }} />
        <Stack.Screen name="Numbers" component={Numbers} options={{ title: 'Numbers' }} />
        <Stack.Screen name="Letters" component={Letters} options={{ title: 'Letters' }} />
        <Stack.Screen name="GameSelection" component={GameSelection} options={{ title: 'Game Selection' }} />
        <Stack.Screen name="NumberMatchingGame" component={NumberMatchingGame} options={{ title: 'Number Matching Game' }} />
        <Stack.Screen name="NumberTracingGame" component={NumberTracingGame} options={{ title: 'Number Tracing Game' }} />
        <Stack.Screen name="NumberQuizGame" component={NumberQuizGame} options={{ title: 'Number Quiz Game' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
