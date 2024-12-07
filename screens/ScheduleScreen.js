import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScheduleScreen({ navigation }) {
  const SCHEDULE = [
    {
      day: 'Monday',
      classes: [
        { time: '9:00 AM', name: 'Computer Science 101', room: 'Lab 302' },
        { time: '2:00 PM', name: 'Faculty Meeting', room: 'Conference Room' }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '10:30 AM', name: 'Web Development', room: 'Tech Building 205' },
        { time: '3:00 PM', name: 'Office Hours', room: 'Room 415' }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '9:00 AM', name: 'Computer Science 101', room: 'Lab 302' },
        { time: '1:00 PM', name: 'Research Seminar', room: 'Lecture Hall' }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Schedule</Text>
      </View> */}
      <ScrollView>
        {SCHEDULE.map((daySchedule, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{daySchedule.day}</Text>
            {daySchedule.classes.map((classItem, classIndex) => (
              <View key={classIndex} style={styles.scheduleItem}>
                <View style={styles.timeContainer}>
                  <Text style={styles.timeText}>{classItem.time}</Text>
                </View>
                <View style={styles.classDetails}>
                  <Text style={styles.className}>{classItem.name}</Text>
                  <Text style={styles.classRoom}>{classItem.room}</Text>
                </View>
              </View>
            ))}
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
  dayContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007bff'
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  timeContainer: {
    width: 80,
    marginRight: 15
  },
  timeText: {
    fontSize: 14,
    color: '#666'
  },
  classDetails: {
    flex: 1
  },
  className: {
    fontSize: 16,
    fontWeight: '600'
  },
  classRoom: {
    fontSize: 14,
    color: '#666'
  }
});