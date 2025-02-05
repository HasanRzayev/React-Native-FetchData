import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDo from '../screens/ToDo';

const Stack = createNativeStackNavigator();

const ToDoStacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ToDo" component={ToDo} />
    </Stack.Navigator>
  );
};

export default ToDoStacks;

const styles = StyleSheet.create({});
