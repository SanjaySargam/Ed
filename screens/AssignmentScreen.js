import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AssignmentsScreen({ navigation }) {
  const ASSIGNMENTS = [
    {
      id: '1',
      title: 'Python Programming Project',
      course: 'Computer Science 101',
      dueDate: 'Dec 15, 2024',
      status: 'Pending',
      submitted: 15,
      total: 25
    },
    {
      id: '2',
      title: 'Web Development Midterm',
      course: 'Web Development',
      dueDate: 'Dec 20, 2024',
      status: 'Grading',
      submitted: 22,
      total: 22
    },
    {
      id: '3',
      title: 'Algorithm Design Assignment',
      course: 'Advanced Programming',
      dueDate: 'Jan 5, 2025',
      status: 'Open',
      submitted: 0,
      total: 18
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return '#ffc107';
      case 'Grading': return '#17a2b8';
      case 'Open': return '#28a745';
      default: return '#666';
    }
  };

  const handleAddAssignment = () => {
    // TODO: Implement add assignment functionality
    console.log('Add new assignment');
    // Typically this would navigate to a new screen or open a modal
    // navigation.navigate('AddAssignmentScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {ASSIGNMENTS.map((assignment) => (
          <TouchableOpacity 
            key={assignment.id} 
            style={styles.assignmentCard}
            onPress={() => navigation.navigate('AssignmentDetailScreen', { assignmentId: assignment.id })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.assignmentTitle}>{assignment.title}</Text>
              <View 
                style={[
                  styles.statusBadge, 
                  { backgroundColor: getStatusColor(assignment.status) }
                ]}
              >
                <Text style={styles.statusText}>{assignment.status}</Text>
              </View>
            </View>
            <View style={styles.assignmentDetails}>
              <View style={styles.detailItem}>
                <Ionicons name="book" size={16} color="#666" />
                <Text style={styles.detailText}>{assignment.course}</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="calendar" size={16} color="#666" />
                <Text style={styles.detailText}>{assignment.dueDate}</Text>
              </View>
            </View>
            <View style={styles.submissionProgress}>
              <Text style={styles.progressText}>
                Submitted: {assignment.submitted}/{assignment.total} Students
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleAddAssignment}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  scrollViewContent: {
    paddingBottom: 80 // Additional padding to prevent content being hidden behind add button
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
  assignmentCard: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  assignmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailText: {
    marginLeft: 5,
    color: '#666'
  },
  submissionProgress: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 5
  },
  progressText: {
    color: '#666',
    textAlign: 'center'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});