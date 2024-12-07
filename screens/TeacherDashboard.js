import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

export default function TeacherDashboard({ navigation }) {
  const { user, logout } = useAuth();

  const DASHBOARD_ITEMS = [
    {
      icon: 'people',
      title: 'My Classes',
      subtitle: 'View and manage your current classes',
      onPress: () => navigation.navigate('ClassesScreen')
    },
    {
      icon: 'calendar',
      title: 'Schedule',
      subtitle: 'View your teaching schedule',
      onPress: () => navigation.navigate('ScheduleScreen')
    },
    {
      icon: 'document-text',
      title: 'Assignments',
      subtitle: 'Create and manage assignments',
      onPress: () => navigation.navigate('AssignmentsScreen')
    },
    {
      icon: 'stats-chart',
      title: 'Student Performance',
      subtitle: 'Review student grades and progress',
      onPress: () => navigation.navigate('StudentPerformanceScreen')
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome,</Text>
          <Text style={styles.username}>{user?.username}</Text>
        </View>
        <TouchableOpacity onPress={()=>{
            logout()
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }]
              });
            }} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="people" size={24} color="#007bff" />
            <View>
              <Text style={styles.statTitle}>Total Students</Text>
              <Text style={styles.statValue}>125</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="book" size={24} color="#28a745" />
            <View>
              <Text style={styles.statTitle}>Active Courses</Text>
              <Text style={styles.statValue}>4</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.dashboardItemsContainer}>
          {DASHBOARD_ITEMS.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.dashboardItem}
              onPress={item.onPress}
            >
              <View style={styles.dashboardItemIcon}>
                <Ionicons name={item.icon} size={24} color="#007bff" />
              </View>
              <View style={styles.dashboardItemText}>
                <Text style={styles.dashboardItemTitle}>{item.title}</Text>
                <Text style={styles.dashboardItemSubtitle}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007bff'
  },
  greeting: {
    color: 'white',
    fontSize: 16
  },
  username: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  logoutButton: {
    padding: 10
  },
  scrollContent: {
    paddingBottom: 20
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  statCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  statTitle: {
    marginLeft: 10,
    color: '#666',
    fontSize: 14
  },
  statValue: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  dashboardItemsContainer: {
    paddingHorizontal: 20
  },
  dashboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  dashboardItemIcon: {
    marginRight: 15,
    backgroundColor: '#e6f2ff',
    padding: 10,
    borderRadius: 8
  },
  dashboardItemText: {
    flex: 1
  },
  dashboardItemTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  dashboardItemSubtitle: {
    color: '#666',
    fontSize: 14
  }
});