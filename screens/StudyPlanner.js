import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function StudyPlannerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Study Planner</Text>
      </View> */}
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Upcoming Study Sessions</Text>
          {/* Add study session components */}
          <Text style={styles.placeholderText}>
            No upcoming study sessions scheduled.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Study Goals</Text>
          {/* Add study goals tracking */}
          <Text style={styles.placeholderText}>
            Set your study goals to track progress.
          </Text>
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
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  },
  sectionContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  placeholderText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 20
  }
});

export default StudyPlannerScreen;