import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function CourseDetailScreen({ route, navigation }) {
  const { courseId } = route.params;
  const [expandedModule, setExpandedModule] = useState(null);

  const COURSE_DETAILS = {
    '1': {
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Emily Rodriguez',
      description: 'Comprehensive introduction to computer science principles and programming.',
      modules: [
        {
          name: 'Introduction to Programming',
          description: 'Learn the basics of programming concepts and syntax.',
          duration: '4 weeks'
        },
        {
          name: 'Data Structures',
          description: 'Explore fundamental data structures and their implementations.',
          duration: '5 weeks'
        },
        {
          name: 'Algorithms',
          description: 'Study computational problem-solving and algorithm design.',
          duration: '6 weeks'
        },
        {
          name: 'Object-Oriented Programming',
          description: 'Master object-oriented design and programming principles.',
          duration: '5 weeks'
        }
      ],
      resources: [
        'Lecture Notes',
        'Practice Assignments',
        'Coding Exercises',
        'Video Tutorials'
      ]
    }
  };

  const course = COURSE_DETAILS[courseId];

  const toggleModuleExpand = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Course Details</Text>
      </View> */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.courseHeader}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.courseInstructor}>
            Instructor: {course.instructor}
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Course Description</Text>
          <Text style={styles.descriptionText}>{course.description}</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Course Modules</Text>
          {course.modules.map((module, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.moduleCard}
              onPress={() => toggleModuleExpand(index)}
            >
              <View style={styles.moduleHeader}>
                <Text style={styles.moduleName}>{module.name}</Text>
                <Text style={styles.moduleDuration}>{module.duration}</Text>
                <Ionicons 
                  name={expandedModule === index ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="#666" 
                />
              </View>
              {expandedModule === index && (
                <Text style={styles.moduleDescription}>
                  {module.description}
                </Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Course Resources</Text>
          <View style={styles.resourceContainer}>
            {course.resources.map((resource, index) => (
              <View key={index} style={styles.resourceItem}>
                <Ionicons name="document-text-outline" size={20} color="#007bff" />
                <Text style={styles.resourceText}>{resource}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll in Course</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

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
  scrollContent: {
    paddingBottom: 20
  },
  courseHeader: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  courseInstructor: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
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
  descriptionText: {
    color: '#666',
    lineHeight: 22
  },
  moduleCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 15
  },
  moduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moduleName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1
  },
  moduleDuration: {
    fontSize: 14,
    color: '#666',
    marginRight: 10
  },
  moduleDescription: {
    color: '#666',
    marginTop: 10,
    lineHeight: 20
  },
  resourceContainer: {
    flexDirection: 'column'
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  resourceText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333'
  },
  enrollButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15
  },
  enrollButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default CourseDetailScreen;