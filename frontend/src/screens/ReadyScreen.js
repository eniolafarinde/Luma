import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReadyScreen = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Set!</Text>
      <Text style={styles.subtitle}>Ready when you are</Text>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8B6FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Itim',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Maitree',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#58429A',
    paddingVertical: 15,
    borderRadius: 30,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Itim',
    fontWeight: 'bold',
  },
});

export default ReadyScreen;
