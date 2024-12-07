import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const storedUser = await SecureStore.getItemAsync('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Authentication check failed', error);
      setIsLoading(false);
    }
  };

  const login = async (username, password, role) => {
    // Mock login - replace with actual authentication logic
    const mockUser = { username, role };
    await SecureStore.setItemAsync('user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const register = async (registrationData) => {
    // Mock registration - replace with actual backend registration
    const { username, email, role, additionalInfo } = registrationData;
    
    // Simulate some basic registration validation
    if (!username || !email) {
      throw new Error('Username and email are required');
    }

    const newUser = {
      username,
      email,
      role,
      additionalInfo
    };

    // Store user in secure storage
    await SecureStore.setItemAsync('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register,
      logout, 
      isLoading,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};