import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import ToDo from '../screens/ToDo';


const Stack =createNativeStackNavigator();

const HomeStacks = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  };
  

export default HomeStacks

const styles = StyleSheet.create({})