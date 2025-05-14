// File: components/StepFlow/steps/SocialStep.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { StepProps } from '../../StepFlow';
import styles from './socialStepStyles';

export function SocialStep({ data, setData, goToNext, goToPrevious }: StepProps) {
  const [mode, setMode] = useState<'solo' | 'join' | 'create'>(data.groupMode || 'solo');
  const [groupCode, setGroupCode] = useState(data.groupCode || '');
  const [groupName, setGroupName] = useState(data.groupName || '');

  const onContinue = () => {
    setData({
      groupMode: mode,
      groupCode: mode === 'join' ? groupCode : undefined,
      groupName: mode === 'create' ? groupName : undefined,
    });
    goToNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Link Up?</Text>
      <Text style={styles.subheading}>Go solo or connect with a group — totally optional.</Text>

      <View style={styles.options}>
        <Pressable onPress={() => setMode('solo')} style={({ pressed }) => [
          styles.optionButton,
          mode === 'solo' && styles.optionSelected,
          pressed && styles.optionPressed
        ]}>
          <Text style={styles.optionText}>Continue Solo</Text>
        </Pressable>

        <Pressable onPress={() => setMode('join')} style={({ pressed }) => [
          styles.optionButton,
          mode === 'join' && styles.optionSelected,
          pressed && styles.optionPressed
        ]}>
          <Text style={styles.optionText}>Join a Group</Text>
        </Pressable>

        <Pressable onPress={() => setMode('create')} style={({ pressed }) => [
          styles.optionButton,
          mode === 'create' && styles.optionSelected,
          pressed && styles.optionPressed
        ]}>
          <Text style={styles.optionText}>Create a Group</Text>
        </Pressable>
      </View>

      {mode === 'join' && (
        <TextInput
          placeholder="Enter Group Code"
          placeholderTextColor="#888"
          value={groupCode}
          onChangeText={setGroupCode}
          style={styles.input}
        />
      )}

      {mode === 'create' && (
        <TextInput
          placeholder="New Group Name"
          placeholderTextColor="#888"
          value={groupName}
          onChangeText={setGroupName}
          style={styles.input}
        />
      )}

      <View style={styles.actionRow}>
        <Pressable onPress={goToPrevious} style={({ pressed }) => [
          styles.navButton,
          pressed && styles.navPressed
        ]}>
          <Text style={styles.navText}>← Back</Text>
        </Pressable>

        <Pressable onPress={onContinue} style={({ pressed }) => [
          styles.navButton,
          pressed && styles.navPressed
        ]}>
          <Text style={styles.navText}>Next →</Text>
        </Pressable>
      </View>
    </View>
  );
}
