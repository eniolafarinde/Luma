import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Welcome2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
            source={require('../asset/image.png')} // "../../" goes up two levels to reach assets
            style={styles.image}
            resizeMode="contain"
        />
        <Text style={styles.title}>Hello, I'm Luma</Text>
        <Text style={styles.subtitle}>Your daily space for peace and balance.</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GetStarted')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8B6FF', // Background color
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    marginTop: 100,
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
  },
  title: {
    fontFamily: 'Itim',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Maitree',
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
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
    fontFamily: 'Itim',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome2;
