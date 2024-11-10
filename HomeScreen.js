import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ route, addAttendanceMessage }) {
  const [message, setMessage] = useState('');
  const { username } = route.params;

   const handleRegisterPoint = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR');
    const formattedTime = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const message = `${username} registrou o ponto em ${formattedDate} às ${formattedTime}`;

    addAttendanceMessage(message); 
    alert(message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Olá {username}!</Text>
      <Button title="Registrar Ponto" onPress={handleRegisterPoint} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});