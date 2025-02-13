import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { setToken } from '../store/storage';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);

    try {
      // Backend API-ə sorğu göndər
      const response = await fetch('https://your-api.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await setToken(data.token); // Tokeni yadda saxla
        navigation.replace('TabStacks'); // Ana səhifəyə yönləndir
      } else {
        Alert.alert('Xəta', data.message || 'Qeydiyyat zamanı xəta baş verdi');
      }
    } catch (error) {
      Alert.alert('Xəta', 'Şəbəkə problemi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
      />

      <Text style={styles.label}>Şifrə:</Text>
      <TextInput 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry
      />

      <Button title={loading ? 'Qeydiyyat...' : 'Qeydiyyatdan keç'} onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
