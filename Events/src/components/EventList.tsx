// src/components/EventList.tsx
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import Card from './Card';

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
}

interface EventListProps {
  type: 'today' | 'upcoming' | 'past';
}

const API_BASE = 'http://10.134.223.15:3000/events';

const EventList: React.FC<EventListProps> = ({ type }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/${type}`);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error('Error fetching events', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchEvents();

    intervalRef.current = setInterval(fetchEvents, 60000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEvents();
  };

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {events.length
        ? events.map((e) => (
            <Card
              key={e.id}
              eventName={e.title}
              place={e.location}
              date={e.date}
            />
          ))
        : <Text style={{ margin: 10 }}>No events.</Text>
      }
    </ScrollView>
  );
};

export default EventList;
