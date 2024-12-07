import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const { login } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter username and password');
      return;
    }

    try {
      await login(username, password, role);
      
      // Role-based navigation
      if (role === 'teacher') {
        navigation.replace('TeacherDashboard');
      } else {
        navigation.replace('StudentDashboard');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EdTech Platform</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton, 
            role === 'student' && styles.activeRole
          ]}
          onPress={() => setRole('student')}
        >
          <Text>Student</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.roleButton, 
            role === 'teacher' && styles.activeRole
          ]}
          onPress={() => setRole('teacher')}
        >
          <Text>Teacher</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerLink}>
          Don't have an account? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  roleButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8
  },
  activeRole: {
    backgroundColor: '#007bff',
    color: 'white'
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  registerLink: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007bff'
  }
});