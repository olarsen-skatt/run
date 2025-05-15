import { View, ActivityIndicator, Platform, ToastAndroid, Alert } from 'react-native';
import StepFlow from '@/components/StepFlow/StepFlow';
import { WhenStep } from '@/components/StepFlow/steps/when/WhenStep';
import { SocialStep } from '@/components/StepFlow/steps/social/SocialStep';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { IntroStep } from '@/components/StepFlow/steps/intro/IntroStep';

export const options = {
  headerShown: false,
};

export default function SetupScreen() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showSuccess = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show('✅ All set!', ToastAndroid.SHORT);
    } else {
      Alert.alert('✅ All set!');
    }
  };

  const handleComplete = async (data: Record<string, any>) => {
    setIsSubmitting(true);

    // Simulate async saving (e.g. to storage or API)
    await new Promise((res) => setTimeout(res, 500));
    showSuccess();

    setTimeout(() => {
      setIsSubmitting(false);
      router.back();
    }, 500);
  };

  return (
    <View style={{ flex: 1 }}>
      {isSubmitting ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <StepFlow steps={[IntroStep, WhenStep, SocialStep]} onComplete={handleComplete} />
      )}
    </View>
  );
}
