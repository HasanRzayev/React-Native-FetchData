import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStacks from './TabStacks';
import LoginStack from './LoginStack';
import { getToken } from '../store/storage';
import { View, ActivityIndicator } from 'react-native';

const Navigation = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await getToken();
      setToken(storedToken);
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <TabStacks /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
