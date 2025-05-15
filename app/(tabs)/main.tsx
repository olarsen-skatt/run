// File: app/(tabs)/index.tsx
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import styles from '../tabStyle/tabOneStyles';
import EditTimeButton from '@/components/EditTimeButton';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import createCommonStyles from '../../components/StepFlow/steps/commonStyles';
import { useTheme } from '../context/ThemeContext';
import ToGroupsButton from '@/components/ToGroupsButton';

export default function TabOneScreen() {
  const { theme } = useTheme();
  const common = createCommonStyles(theme);
  
  return (
    <View style={common.container}>
      <View style={common.header}>
        <ToGroupsButton onPress={() => router.push('/group/group-info')} />
      </View>
      <ToggleThemeButton />
      <EditTimeButton onPress={() => router.push('/edit-time')} />
      <Text style={common.title}>Welcome Back.</Text>
      <Text style={common.subline}>Keep it moving.</Text>

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
