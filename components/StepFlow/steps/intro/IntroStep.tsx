// File: components/StepFlow/steps/IntroStep.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StepProps } from '../../StepFlow';
import createCommonStyles from '../commonStyles';
import { useTheme } from '@/app/context/ThemeContext';

export function IntroStep({ goToNext }: StepProps) {
  const { theme } = useTheme();
  const common = createCommonStyles(theme);
  
  return (
    <View style={common.container}>
      <Text style={common.title}>You said you would.</Text>
      <Text style={common.subline}>Let's make that real.</Text>

      <Pressable
        onPress={goToNext}
        style={({ pressed }) => [
          common.button,
          pressed && common.buttonPressed,
        ]}
      >
        <Text style={common.buttonText}>Let's begin</Text>
      </Pressable>
    </View>
  );
}
