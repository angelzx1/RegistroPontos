import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';


import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import AdminScreen from './AdminScreen';

const Stack = createStackNavigator();

export default function App() {

let [registeredUsers, setRegisteredUsers] = useState(['admin']);
const [attendanceMessages, setAttendanceMessages] = useState([]);
const [employeeRecords, setEmployeeRecords] = useState([]); 

  const addUser = (username) => {
    if (!registeredUsers.includes(username)) {
      setRegisteredUsers([...registeredUsers, username]);
    }
  };

   const addAttendanceMessage = (message) => {
    setAttendanceMessages([...attendanceMessages, message]);
  };

const addEmployeeRecord = (employee) => {
    setEmployeeRecords([...employeeRecords, employee]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Clinica Terapêutica Bela Dias">
        <Stack.Screen name="Clinica Terapêutica Bela Dias">
  {(props) => <SignInScreen {...props} registeredUsers={registeredUsers} />}
</Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              addAttendanceMessage={addAttendanceMessage}
            />
          )}
        </Stack.Screen>
          <Stack.Screen name="Admin">
          {(props) => <AdminScreen {...props} addUser={addUser} attendanceMessages={attendanceMessages} employeeRecords={employeeRecords} 
          addEmployeeRecord={addEmployeeRecord} 
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
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
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});