import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventList from '../components/EventList';

const PastEvents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Past Events</Text>
      <EventList type="past" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
   
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    
  },
});

export default PastEvents;
