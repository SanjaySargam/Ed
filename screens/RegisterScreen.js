import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Alert 
} from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const { register } = useAuth();

  const validateForm = () => {
    // Basic validation
    if (!username) {
      Alert.alert('Validation Error', 'Username is required');
      return false;
    }

    if (!email || !email.includes('@')) {
      Alert.alert('Validation Error', 'Please enter a valid email');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters');
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert('Validation Error', 'Passwords do not match');
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const registrationData = {
        username,
        email,
        password,
        role,
        additionalInfo: role === 'teacher' 
          ? { specialization: additionalInfo }
          : { grade: additionalInfo }
      };

      await register(registrationData);

      // Navigate based on role after successful registration
      if (role === 'teacher') {
        navigation.replace('TeacherDashboard');
      } else {
        navigation.replace('StudentDashboard');
      }
    } catch (error) {
      Alert.alert('Registration Failed', error.message);
    }
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Create Account</Text>
      
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[
            styles.roleButton, 
            role === 'student' && styles.activeRole
          ]}
          onPress={() => setRole('student')}
        >
          <Text style={role === 'student' && styles.activeRoleText}>Student</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.roleButton, 
            role === 'teacher' && styles.activeRole
          ]}
          onPress={() => setRole('teacher')}
        >
          <Text style={role === 'teacher' && styles.activeRoleText}>Teacher</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      
      <TextInput
        style={styles.input}
        placeholder={
          role === 'teacher' 
            ? 'Specialization (e.g., Computer Science)' 
            : 'Current Grade/Class'
        }
        value={additionalInfo}
        onChangeText={setAdditionalInfo}
      />
      
      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={handleRegister}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginLink}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    borderRadius: 8,
    backgroundColor: 'white'
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
    backgroundColor: '#007bff'
  },
  activeRoleText: {
    color: 'white'
  },
  registerButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  loginLink: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007bff'
  }
});