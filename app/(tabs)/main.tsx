// File: app/(tabs)/index.tsx
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import styles from '../tabStyle/tabOneStyles';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back.</Text>
      <Text style={styles.subline}>Keep it moving.</Text>

      <Pressable
        onPress={() => router.push('/setup')}
        style={({ pressed }) => [
          styles.testButton,
          pressed && styles.testButtonPressed,
        ]}
      >
        <Text style={styles.testButtonText}>Test Setup Flow</Text>
      </Pressable>
    </View>
  );
}
