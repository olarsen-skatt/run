// File: components/ToggleThemeButton.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';
import { useTheme } from '@/app/context/ThemeContext';
import SwitchWithIcons from 'react-native-switch-with-icons';
import { FontAwesome } from '@expo/vector-icons';
import { getColors } from '@/constants/Colors';

export default function ToggleThemeButton() {
  const systemTheme = useColorScheme();
  const { theme, toggleTheme } = useTheme();
  const colors = getColors(theme);
  const isDark = (theme ?? systemTheme) === 'dark';

  return (
    <SwitchWithIcons
      style={styles.button}
      value={isDark}
      onValueChange={toggleTheme}
      thumbColor={{
        true: colors.toggleThumb,
        false: colors.toggleThumb,
      }}
      trackColor={{
        true: colors.toggleTrack,
        false: colors.toggleTrack,
      }}
      iconColor={{
        true: colors.toggleIcon,
        false: colors.toggleIcon,
      }}
      icon={{
        true: <FontAwesome name="sun-o" size={14} color={colors.toggleIcon} />,
        false: <FontAwesome name="moon-o" size={14} color={colors.toggleIcon} />,
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});
