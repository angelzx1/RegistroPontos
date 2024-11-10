import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Image } from 'react-native';

export default function SignInScreen({ navigation, registeredUsers }) {
  const [username, setUsername] = useState('');

  const handleSignIn = () => {
    if (username === 'admin') {
      navigation.navigate('Admin');
    } else if (registeredUsers.includes(username)) {
      navigation.navigate('Home', { username });
    } else {
      Alert.alert("Erro", "Você não está registrado no sistema");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
   espaco: {
    width: 150,  // Largura da imagem
    height: 150, // Altura da imagem
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});