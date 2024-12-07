import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentPerformanceScreen({ navigation, route }) {
  // Mock student performance data
  const studentData = {
    name: 'John Doe',
    overall_gpa: 3.65,
    courses: [
      {
        id: '1',
        name: 'Computer Science 101',
        grade: 'A-',
        credits: 3,
        assignments_completed: 22,
        assignments_total: 25,
        performance_trend: 'increasing'
      },
      {
        id: '2',
        name: 'Web Development',
        grade: 'B+',
        credits: 4,
        assignments_completed: 20,
        assignments_total: 22,
        performance_trend: 'stable'
      },
      {
        id: '3',
        name: 'Advanced Programming',
        grade: 'A',
        credits: 3,
        assignments_completed: 18,
        assignments_total: 18,
        performance_trend: 'perfect'
      }
    ]
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'increasing': return 'trending-up';
      case 'decreasing': return 'trending-down';
      case 'stable': return 'remove';
      case 'perfect': return 'checkmark-circle';
      default: return 'help';
    }
  };

  const getTrendColor = (trend) => {
    switch(trend) {
      case 'increasing': return '#28a745';
      case 'decreasing': return '#dc3545';
      case 'stable': return '#ffc107';
      case 'perfect': return '#007bff';
      default: return '#6c757d';
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Student Performance</Text>
      </View> */}

      <ScrollView>
        {/* Student Overview */}
        <View style={styles.overviewCard}>
          <Text style={styles.studentName}>{studentData.name}</Text>
          <View style={styles.gpaContainer}>
            <Text style={styles.gpaLabel}>Overall GPA</Text>
            <Text style={styles.gpaValue}>{studentData.overall_gpa}</Text>
          </View>
        </View>

        {/* Course Performance */}
        {studentData.courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <View style={styles.courseHeader}>
              <Text style={styles.courseName}>{course.name}</Text>
              <Text style={styles.courseGrade}>{course.grade}</Text>
            </View>
            
            <View style={styles.courseDetails}>
              <View style={styles.detailItem}>
                <Ionicons name="book" size={16} color="#666" />
                <Text style={styles.detailText}>Credits: {course.credits}</Text>
              </View>
              
              <View style={styles.detailItem}>
                <Ionicons 
                  name={getTrendIcon(course.performance_trend)} 
                  size={16} 
                  color={getTrendColor(course.performance_trend)} 
                />
                <Text style={styles.detailText}>
                  Performance: {course.performance_trend}
                </Text>
              </View>
            </View>

            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>
                Assignments: {course.assignments_completed}/{course.assignments_total}
              </Text>
              <View 
                style={[
                  styles.progressBar, 
                  { 
                    width: `${(course.assignments_completed / course.assignments_total) * 100}%`,
                    backgroundColor: getTrendColor(course.performance_trend)
                  }
                ]} 
              />
            </View>
          </View>
        ))}
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
  overviewCard: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  studentName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  gpaContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  gpaLabel: {
    fontSize: 16,
    color: '#666',
    marginRight: 10
  },
  gpaValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff'
  },
  courseCard: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  courseGrade: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745'
  },
  courseDetails: {
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
  progressContainer: {
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    height: 20,
    overflow: 'hidden',
    position: 'relative'
  },
  progressText: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    top: 2,
    color: '#333',
    fontSize: 12
  },
  progressBar: {
    height: '100%',
    opacity: 0.5
  }
});