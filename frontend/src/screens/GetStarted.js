import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const GetStarted = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.trim() === '') return;
    navigation.navigate('Register', { userName: name });
  };


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Let's get Personal</Text>
        <Text style={styles.subtitle}>What may I call you?</Text>
        <TextInput
          style={styles.input}
          placeholder="Your name..."
          value={name}
          onChangeText={setName}
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
    marginTop: 300,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Itim',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Maitree',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#58429A',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Itim',
    color: '#000',
    backgroundColor: "transparent",
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

export default GetStarted;
