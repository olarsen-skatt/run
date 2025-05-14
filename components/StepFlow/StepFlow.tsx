// File: components/StepFlow/StepFlow.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export interface StepProps {
  data: Record<string, any>;
  setData: (partial: Record<string, any>) => void;
  goToNext: () => void;
  goToPrevious: () => void;
}

interface StepFlowProps {
  steps: React.ComponentType<StepProps>[];
  onComplete: (data: Record<string, any>) => void;
}

export default function StepFlow({ steps, onComplete }: StepFlowProps) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<Record<string, any>>({});

  const setFormData = (partial: Record<string, any>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  const goToNext = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      onComplete(data);
    }
  };

  const goToPrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const Step = steps[current];

  return (
    <View style={styles.container}>
      <Step
        data={data}
        setData={setFormData}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
