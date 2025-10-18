import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventList from '../components/EventList';

const TodaysEvent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Today's Events</Text>
      <EventList type="today" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  headerText: { fontSize: 25, fontWeight: 'bold', marginBottom: 20 },
});

export default TodaysEvent;
