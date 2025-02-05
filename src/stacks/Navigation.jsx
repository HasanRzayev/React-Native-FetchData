import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStacks from './TabStacks';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabStacks />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
