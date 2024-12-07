import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  FlatList, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

// Mock posts data
const POSTS = [
  {
    id: '1',
    title: 'New Course Launch: Machine Learning',
    description: 'Join our comprehensive ML course starting next month!',
    image: 'https://example.com/ml-course.jpg'
  },
  {
    id: '2',
    title: 'Upcoming Webinar: Future of EdTech',
    description: 'Expert panel discussing innovations in educational technology.',
    image: 'https://example.com/webinar.jpg'
  },
  {
    id: '3',
    title: 'Student Achievement Spotlight',
    description: 'Congratulations to our top performers this semester!',
    image: 'https://example.com/achievements.jpg'
  }
];

const PostCard = ({ item }) => (
  <View style={styles.postCard}>
    <Image 
      source={{ uri: item.image }} 
      style={styles.postImage} 
      resizeMode="cover" 
    />
    <View style={styles.postContent}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postDescription}>{item.description}</Text>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={POSTS}
        renderItem={({ item }) => <PostCard item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7'
  },
  listContainer: {
    padding: 15
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  postImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  postContent: {
    padding: 15
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  postDescription: {
    color: '#666'
  }
});