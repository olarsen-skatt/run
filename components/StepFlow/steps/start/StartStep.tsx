// File: components/StepFlow/steps/StartStep.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StepProps } from '../../StepFlow';
import styles from './startStepStyles';

export function StartStep({ goToNext }: StepProps) {
  const onContinue = () => {
    goToNext();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let’s Lock This In.</Text>
      <Text style={styles.subheading}>One small step toward doing what you said you would.</Text>

      <Pressable onPress={onContinue} style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}>
        <Text style={styles.buttonText}>BEGIN</Text>
      </Pressable>
    </View>
  );
}
