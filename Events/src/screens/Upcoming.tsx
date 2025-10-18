import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventList from '../components/EventList';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Upcoming Events</Text>
      <EventList type="upcoming" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  headerText: { fontSize: 25, fontWeight: 'bold', marginBottom: 20 },
});

export default Upcoming;
