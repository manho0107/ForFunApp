/**
 * My For Fun App
 *
 * @format
 */

import React, { useState} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/AboutScreen';
import AboutScreen from './screens/HomeScreen';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;

// <NavigationContainer> /* root component*/
// <Stack.Screen name="AboutScreen" component={AboutScreen} /> name is the identifier