import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

// Mock data for courses and assignments
const COURSES = [
  {
    id: '1',
    title: 'Introduction to Computer Science',
    instructor: 'Dr. Emily Rodriguez',
    progress: 0.7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9M9ra5dobm6HvD2XtdrAZLJPDKi1latJMg&s'
  },
  {
    id: '2',
    title: 'Mathematics for Data Science',
    instructor: 'Prof. Michael Chen',
    progress: 0.5,
    image: 'https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid'
  }
];

const ASSIGNMENTS = [
  {
    id: '1',
    title: 'Data Structures Homework',
    course: 'Introduction to Computer Science',
    dueDate: '2024-02-15',
    status: 'Pending'
  },
  {
    id: '2',
    title: 'Linear Algebra Problem Set',
    course: 'Mathematics for Data Science',
    dueDate: '2024-02-20',
    status: 'Completed'
  }
];

const NOTIFICATIONS = [
  {
    id: '1',
    message: 'New assignment posted in Computer Science',
    time: '2 hours ago'
  },
  {
    id: '2', 
    message: 'Grade updated for Math quiz',
    time: '1 day ago'
  }
];

export default function StudentDashboard({ navigation }) {
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('courses');

  const renderCourses = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>My Courses</Text>
      {COURSES.map(course => (
        <TouchableOpacity 
          key={course.id} 
          style={styles.courseCard}>
          <Image 
            source={{ uri: course.image }} 
            style={styles.courseImage} 
          />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseInstructor}>
              {course.instructor}
            </Text>
            <View style={styles.progressContainer}>
              <View 
                style={[
                  styles.progressBar, 
                  { width: `${course.progress * 100}%` }
                ]} 
              />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderAssignments = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Assignments</Text>
      {ASSIGNMENTS.map(assignment => (
        <View 
          key={assignment.id} 
          style={[
            styles.assignmentCard,
            assignment.status === 'Completed' 
              ? styles.completedAssignment 
              : styles.pendingAssignment
          ]}
        >
          <Text style={styles.assignmentTitle}>
            {assignment.title}
          </Text>
          <Text style={styles.assignmentCourse}>
            {assignment.course}
          </Text>
          <View style={styles.assignmentFooter}>
            <Text style={styles.assignmentDueDate}>
              Due: {assignment.dueDate}
            </Text>
            <Text style={styles.assignmentStatus}>
              {assignment.status}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );

  const renderNotifications = () => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Notifications</Text>
      {NOTIFICATIONS.map(notification => (
        <View 
          key={notification.id} 
          style={styles.notificationCard}
        >
          <Text style={styles.notificationMessage}>
            {notification.message}
          </Text>
          <Text style={styles.notificationTime}>
            {notification.time}
          </Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>
            Welcome, {user?.username}!
          </Text>
          <Text style={styles.gradeText}>
            Grade: 11th Grade
          </Text>
        </View>
        <TouchableOpacity onPress={()=>{
            logout()
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }]
              });
            }}>
          <Ionicons name="log-out-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>

      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[
            styles.tab, 
            activeSection === 'courses' && styles.activeTab
          ]}
          onPress={() => setActiveSection('courses')}
        >
          <Text style={styles.tabText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tab, 
            activeSection === 'assignments' && styles.activeTab
          ]}
          onPress={() => setActiveSection('assignments')}
        >
          <Text style={styles.tabText}>Assignments</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.tab, 
            activeSection === 'notifications' && styles.activeTab
          ]}
          onPress={() => setActiveSection('notifications')}
        >
          <Text style={styles.tabText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {activeSection === 'courses' && renderCourses()}
        {activeSection === 'assignments' && renderAssignments()}
        {activeSection === 'notifications' && renderNotifications()}
      </ScrollView>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity 
          style={styles.quickActionButton}
          onPress={() => navigation.navigate('StudyPlanner')}
        >
          <Ionicons name="calendar-outline" size={24} color="white" />
          <Text style={styles.quickActionText}>Study Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.quickActionButton}
          onPress={() => navigation.navigate('GradesScreen')}
        >
          <Ionicons name="stats-chart-outline" size={24} color="white" />
          <Text style={styles.quickActionText}>My Grades</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  gradeText: {
    color: '#666',
    marginTop: 5
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff'
  },
  tabText: {
    fontWeight: 'bold',
    color: '#333'
  },
  scrollContainer: {
    flex: 1,
    padding: 15
  },
  sectionContainer: {
    marginBottom: 20,
    flex:1
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  courseDetails: {
    flex: 1,
    justifyContent: 'center'
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  courseInstructor: {
    color: '#666',
    marginVertical: 5
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007bff'
  },
  assignmentCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  completedAssignment: {
    borderLeftWidth: 5,
    borderLeftColor: 'green'
  },
  pendingAssignment: {
    borderLeftWidth: 5,
    borderLeftColor: 'orange'
  },
  assignmentTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  assignmentCourse: {
    color: '#666',
    marginVertical: 5
  },
  assignmentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  assignmentDueDate: {
    color: '#666'
  },
  assignmentStatus: {
    fontWeight: 'bold'
  },
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  notificationMessage: {
    fontSize: 15
  },
  notificationTime: {
    color: '#666',
    marginTop: 5
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0'
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10
  },
  quickActionText: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold'
  }
});