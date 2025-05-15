import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { getColors } from '@/constants/Colors';
import styles from './groupInfoStyles';
import { useGroup } from '../context/GroupContext';
import { useTheme } from '../context/ThemeContext';

export default function GroupInfoScreen() {
  const router = useRouter();
  const { group, leaveGroup, createGroup } = useGroup();
  const { theme } = useTheme();
  const colors = getColors(theme);

  const userId = 'you'; // replace with actual device ID if stored

  const handleCreateGroup = () => {
    createGroup('My New Group', {
      id: userId,
      name: 'You',
      joinedAt: Date.now(),
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={[styles.backText, { color: colors.accent }]}>← Back</Text>
      </Pressable>

      {!group ? (
        <>
          <Text style={[styles.title, { color: colors.text }]}>You're not in a group</Text>
          <Pressable onPress={handleCreateGroup} style={styles.actionButton}>
            <Text style={[styles.actionText, { color: colors.buttonText }]}>Create New Group</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text style={[styles.title, { color: colors.text }]}>Group: {group.name}</Text>
          <Text style={[styles.code, { color: colors.subtleText }]}>Code: {group.id}</Text>

          <Text style={[styles.label, { color: colors.subtleText }]}>Members:</Text>
          {group.members.map((m) => (
            <Text key={m.id} style={{ color: colors.text }}>
              {m.name} {m.id === group.ownerId && '(owner)'}
            </Text>
          ))}

          <Pressable onPress={leaveGroup} style={[styles.actionButton, { marginTop: 24 }]}>
            <Text style={[styles.actionText, { color: colors.buttonText }]}>Leave Group</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
