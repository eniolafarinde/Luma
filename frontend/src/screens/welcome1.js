import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Welcome1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Luma!</Text>
      <Text style={styles.subtitle}>Learn and manage your tasks efficiently.</Text>
      <Button title="Next" onPress={() => navigation.navigate('Welcome2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#C8B6FF', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
});

export default Welcome1;
