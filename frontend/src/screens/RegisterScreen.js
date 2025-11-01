import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation, route }) => {
  const { userName } = route.params; 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    console.log({ userName, email, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome, {userName}!</Text>
        <Text style={styles.subtitle}>Let’s keep your space safe and Personal</Text>
        <Text style={styles.subtitle}>A few details to get you comfy</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8B6FF',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    marginTop: 250,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Itim',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Maitree',
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    width: 270,
    height: 50,
    borderColor: '#58429A',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Itim',
    color: '#000',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#58429A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 50,
    width: 200,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Itim',
  },
});

export default RegisterScreen;
