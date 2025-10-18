// src/components/Card.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { formatDate } from '../utils/utils';

interface CardProps {
  eventName: string;
  place: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ eventName, place, date }) => {
  return (
    <View style={styles.card}>
      <LinearGradient
        colors={['#ff7e5f', '#ff4e00']}
        style={styles.topSection}
      >
        <Text style={styles.dateText}>{formatDate(date)}</Text>
      </LinearGradient>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>{eventName}</Text>
        <Text style={styles.location}>{place}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    width: 240,
    backgroundColor: '#fff',
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  topSection: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  bottomSection: {
    backgroundColor: '#fff',
    padding: 15,
    height:100,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  location: {
    color: '#666',
    fontSize: 14,
  },
});

export default Card;
