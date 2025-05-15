import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
}

export default function ToGroupsButton({ onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <FontAwesome name="group" size={20} color="#00ff88" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1c1c1c',
    padding: 12,
    borderRadius: 20,
    shadowColor: '#00ff88',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});
