import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../context/AuthContext';  // Import Screens
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TeacherDashboard from '../screens/TeacherDashboard';
import StudentDashboard from '../screens/StudentDashboard';
import HomeScreen from '../screens/HomeScreen';
import StudyPlannerScreen from '../screens/StudyPlanner';
import GradesScreen from '../screens/GradeScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import ClassesScreen from '../screens/ClassesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import AssignmentsScreen from '../screens/AssignmentScreen';
import StudentPerformanceScreen from '../screens/StudentPerformance';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AuthProvider>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007bff', // Blue header background
            },
            headerTintColor: 'white', // White text in header
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            cardStyle: {
              backgroundColor: '#f4f4f4', // Consistent background color
            }
          }}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ title: 'Create Account' }}
          />
          <Stack.Screen 
            name="TeacherDashboard" 
            component={TeacherDashboard} 
            options={{ title: 'Teacher Dashboard' }}
          />
          <Stack.Screen 
            name="StudentDashboard" 
            component={StudentDashboard} 
            options={{ title: 'Student Dashboard' }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Home' }}
          />
          <Stack.Screen 
            name="StudyPlanner" 
            component={StudyPlannerScreen} 
            options={{ title: 'Study Planner' }}
          />
          <Stack.Screen 
            name="GradesScreen" 
            component={GradesScreen} 
            options={{ title: 'Grades' }}
          />
          <Stack.Screen 
            name="CourseDetailScreen" 
            component={CourseDetailScreen} 
            options={{ title: 'Course Details' }}
          />
          <Stack.Screen 
            name="ClassesScreen" 
            component={ClassesScreen} 
            options={{ title: 'My Classes' }}
          />
          <Stack.Screen 
            name="ScheduleScreen" 
            component={ScheduleScreen} 
            options={{ title: 'Class Schedule' }}
          />
          <Stack.Screen 
            name="AssignmentsScreen" 
            component={AssignmentsScreen} 
            options={{ title: 'Assignments' }}
          />
          <Stack.Screen 
            name="StudentPerformanceScreen" 
            component={StudentPerformanceScreen} 
            options={{ title: 'Student Performance' }}
          />
        </Stack.Navigator>
    </AuthProvider>
  );
}