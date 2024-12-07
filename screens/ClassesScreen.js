import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ClassesScreen({ navigation }) {
  const CLASSES = [
    {
      id: '1',
      name: 'Computer Science 101',
      students: 25,
      time: 'Mon/Wed 9:00 AM',
      room: 'Lab 302'
    },
    {
      id: '2',
      name: 'Advanced Programming',
      students: 18,
      time: 'Tue/Thu 2:00 PM',
      room: 'Tech Building 205'
    },
    {
      id: '3',
      name: 'Web Development',
      students: 22,
      time: 'Fri 10:00 AM',
      room: 'Computer Lab 415'
    }
  ];

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Classes</Text>
      </View> */}
      <ScrollView>
        {CLASSES.map((classItem) => (
          <TouchableOpacity 
            key={classItem.id} 
            style={styles.classCard}
            onPress={() => navigation.navigate('ClassDetailScreen', { classId: classItem.id })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.className}>{classItem.name}</Text>
              <View style={styles.studentBadge}>
                <Ionicons name="people" size={16} color="#007bff" />
                <Text style={styles.studentCount}>{classItem.students}</Text>
              </View>
            </View>
            <View style={styles.classDetails}>
              <View style={styles.detailItem}>
                <Ionicons name="time" size={16} color="#666" />
                <Text style={styles.detailText}>{classItem.time}</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="location" size={16} color="#666" />
                <Text style={styles.detailText}>{classItem.room}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton}>
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
  classCard: {
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
  className: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  studentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f2ff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15
  },
  studentCount: {
    marginLeft: 5,
    color: '#007bff'
  },
  classDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailText: {
    marginLeft: 5,
    color: '#666'
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
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  }
});