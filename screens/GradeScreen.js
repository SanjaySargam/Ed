import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function GradesScreen({ navigation }) {
  const SUBJECTS = [
    { name: 'Mathematics', grade: 'A', percentage: 92 },
    { name: 'Computer Science', grade: 'A-', percentage: 88 },
    { name: 'Physics', grade: 'B+', percentage: 84 },
    { name: 'Literature', grade: 'B', percentage: 80 }
  ];

  const getProgressColor = (percentage) => {
    if (percentage >= 90) return '#28a745';
    if (percentage >= 80) return '#17a2b8';
    if (percentage >= 70) return '#ffc107';
    return '#dc3545';
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.gradesContainer}>
          {SUBJECTS.map((subject, index) => (
            <View key={index} style={styles.gradeCard}>
              <View style={styles.gradeCardHeader}>
                <Text style={styles.subjectName}>{subject.name}</Text>
                <Text style={styles.gradeText}>{subject.grade}</Text>
              </View>
              <View style={styles.progressContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { 
                      width: `${subject.percentage}%`,
                      backgroundColor: getProgressColor(subject.percentage)
                    }
                  ]}
                />
              </View>
              <Text style={styles.percentageText}>
                {subject.percentage}%
              </Text>
            </View>
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
  gradesContainer: {
    padding: 15
  },
  gradeCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  gradeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  subjectName: {
    fontSize: 16,
    fontWeight: '600'
  },
  gradeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745'
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    borderRadius: 5
  },
  percentageText: {
    textAlign: 'right',
    color: '#666'
  }
});

export default GradesScreen;