import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login'
import TeacherInterface from './Screens/TeacherInterface'
import ParentInterface from './Screens/ParentInterface'
import AdminInterface from './Screens/AdminInterface'

export default function App() {
  return (
    <View style={styles.container}>
      <AdminInterface/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
