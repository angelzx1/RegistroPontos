import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function AdminScreen({ addUser, employeeRecords, addEmployeeRecord, attendanceMessages }) {
  const [employeeName, setEmployeeName] = useState('');

  const handleAddEmployee = () => {
    if (employeeName.trim()) {
      const newEmployee = {
        name: employeeName,
        entryTime: '08:00',  
        exitTime: '16:00'    
      };
      addEmployeeRecord(newEmployee); 
      addUser(employeeName); 
      setEmployeeName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Funcionário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Funcionário"
        value={employeeName}
        onChangeText={setEmployeeName}
      />
      <Button title="Adicionar Funcionário" onPress={handleAddEmployee} />

      <Text style={styles.subtitle}>Funcionários Registrados</Text>
      <FlatList
        data={employeeRecords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.employeeRow}>
            <Text style={styles.employeeName}>{item.name}</Text>
            <Text style={styles.employeeTime}>Entrada: {item.entryTime}</Text>
            <Text style={styles.employeeTime}>Saída: {item.exitTime}</Text>
            
          </View>
          
        )}
        style={styles.list}
      />

        <Text style={styles.subtitle}>Registros de Ponto</Text>
      <FlatList
        data={attendanceMessages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.message}>{item}</Text>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  list: {
    marginTop: 10,
  },
  employeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  employeeTime: {
    fontSize: 14,
    color: '#555',
  },
});