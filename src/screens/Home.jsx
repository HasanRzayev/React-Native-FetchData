import React from 'react';
import { View, Text, Button } from 'react-native';
import { removeToken } from '../store/storage';

const Home = ({ navigation }) => {
  const handleLogout = () => {
    removeToken();
    navigation.replace('LoginStack');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Netflix!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
