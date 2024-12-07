import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import TeacherDashboard from '../../screens/TeacherDashboard';
import StudentDashboard from '../../screens/StudentDashboard';
import HomeScreen from '../../screens/HomeScreen';
import { AuthProvider } from '../../context/AuthContext';
import AppNavigator from '../../navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { View } from 'react-native';


export default function App() {
  return (
    <View style={{flex:1}}>
    <StatusBar barStyle="dark-content" />
      <AppNavigator/>
      </View>
  );
}