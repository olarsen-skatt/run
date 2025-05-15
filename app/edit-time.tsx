import React, { useState } from 'react';
import { View } from 'react-native';
import { WhenStep } from '@/components/StepFlow/steps/when/WhenStep';
import { useRouter } from 'expo-router';

export default function EditTimeScreen() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#111' }}>
      <WhenStep
        data={formData}
        setData={(partial) => setFormData(prev => ({ ...prev, ...partial }))}
        goToNext={() => router.back()}
        goToPrevious={() => router.back()}
      />
    </View>
  );
}
