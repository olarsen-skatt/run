// File: components/StepFlow/steps/WhenStep.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import WheelPicker from 'react-native-wheel-picker-expo';
import { StepProps } from '../../StepFlow';
import styles from './whenStepStyles';
import { useReminder } from '@/app/context/ReminderContext';
import createCommonStyles from '../commonStyles';
import { useTheme } from '@/app/context/ThemeContext';

export function WhenStep({ setData, goToNext }: StepProps) {
  const { theme } = useTheme();
  const common = createCommonStyles(theme);
  const { time, setTime } = useReminder();

  const [hourIndex, setHourIndex] = useState(18);
  const [minuteIndex, setMinuteIndex] = useState(30);
  const [showAmPm, setShowAmPm] = useState(false);
  const [amPm, setAmPm] = useState<'AM' | 'PM'>('AM');

  useEffect(() => {
    if (time) {
      const [h, m] = time.split(':').map(Number);
      setHourIndex(h);
      setMinuteIndex(m);
      setAmPm(h >= 12 ? 'PM' : 'AM');
    }
  }, [time]);

  const hourItems = showAmPm
    ? Array.from({ length: 12 }, (_, i) => ({
        label: (i === 0 ? 12 : i).toString().padStart(2, '0'),
        value: i === 0 ? 12 : i,
      }))
    : Array.from({ length: 24 }, (_, i) => ({
        label: i.toString().padStart(2, '0'),
        value: i,
      }));

  const minuteItems = Array.from({ length: 60 }, (_, i) => ({
    label: i.toString().padStart(2, '0'),
    value: i,
  }));

  const confirm = () => {
    let rawHour = hourItems[hourIndex].value;

    const hour24 = showAmPm
      ? amPm === 'PM'
        ? rawHour === 12 ? 12 : rawHour + 12
        : rawHour === 12 ? 0 : rawHour
      : rawHour;

    const formatted = `${hour24.toString().padStart(2, '0')}:${minuteItems[minuteIndex].label}`;
    setTime(formatted);
    setData({ time: formatted });
    goToNext();
  };

  return (
    <View style={common.container}>
      <Text style={common.title}>When?</Text>

      <View style={styles.wheelWrap}>
        <WheelPicker
          height={200}
          width={100}
          initialSelectedIndex={hourIndex % hourItems.length}
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
        {showAmPm && (
          <WheelPicker
            height={200}
            width={100}
            initialSelectedIndex={amPm === 'AM' ? 0 : 1}
            items={[
              { label: 'AM', value: 'AM' },
              { label: 'PM', value: 'PM' },
            ]}
            onChange={({ index }) => setAmPm(index === 0 ? 'AM' : 'PM')}
          />
        )}
      </View>

      <Pressable
        onPress={() => setShowAmPm(prev => !prev)}
        style={({ pressed }) => [
          common.toggleButton,
          pressed && common.buttonPressed,
        ]}
      >
        <Text style={common.toggleButtonText}>
          {showAmPm ? '→ 24h' : '→ AM/PM'}
        </Text>
      </Pressable>

      <View style={common.actionRow}>
        <View style={styles.footer}>
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
      </View>
    </View>
  );
}
