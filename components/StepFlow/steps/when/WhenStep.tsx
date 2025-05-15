// File: components/StepFlow/steps/WhenStep.tsx
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import WheelPicker from 'react-native-wheel-picker-expo';
import { StepProps } from '../../StepFlow';
import styles from './whenStepStyles';
import common from '../commonStyles';

const hourItems = Array.from({ length: 24 }, (_, i) => ({
  label: i.toString().padStart(2, '0'),
  value: i,
}));
const minuteItems = Array.from({ length: 60 }, (_, i) => ({
  label: i.toString().padStart(2, '0'),
  value: i,
}));

export function WhenStep({ data, setData, goToNext }: StepProps) {
  const [hourIndex, setHourIndex] = useState(18);
  const [minuteIndex, setMinuteIndex] = useState(30);

  const confirm = () => {
    const time = `${hourItems[hourIndex].label}:${minuteItems[minuteIndex].label}`;
    setData({ time });
    goToNext();
  };

  return (
    <View style={common.container}>
      <Text style={common.title}>WHEN?</Text>

      <View style={styles.wheelWrap}>
        <WheelPicker
          height={200}
          width={100}
          initialSelectedIndex={hourIndex}
          items={hourItems}
          onChange={({ index }) => setHourIndex(index)}
        />
        <Text style={styles.colon}>:</Text>
        <WheelPicker
          height={200}
          width={100}
          initialSelectedIndex={minuteIndex}
          items={minuteItems}
          onChange={({ index }) => setMinuteIndex(index)}
        />
      </View>

      <Pressable
        onPress={confirm}
        style={({ pressed }) => [
          common.button,
          pressed && common.buttonPressed,
        ]}
      >
        <Text style={common.buttonText}>Next →</Text>
      </Pressable>
    </View>
  );
}
