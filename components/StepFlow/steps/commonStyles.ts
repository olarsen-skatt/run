// File: components/StepFlow/steps/commonStyles.ts
import { StyleSheet } from 'react-native';
import { getColors } from '@/constants/Colors';
import { Theme } from '@/app/context/ThemeContext';

const createCommonStyles = (theme: Theme) => {
  const colors = getColors(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
    },
    title: {
      fontSize: 32,
      color: colors.text,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: 1.2,
    },
    subline: {
      fontSize: 16,
      color: colors.subtleText,
      textAlign: 'center',
      marginBottom: 48,
      maxWidth: 280,
    },
    button: {
      backgroundColor: colors.accent,
      paddingHorizontal: 36,
      paddingVertical: 14,
      borderRadius: 6,
      shadowColor: colors.accent,
      shadowOpacity: 0.3,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 3 },
    },
    buttonPressed: {
      opacity: 0.8,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.buttonText,
    },
    toggleButton: {
      marginBottom: 16,
      paddingVertical: 6,
      paddingHorizontal: 16,
      backgroundColor: colors.toggleBackground,
      borderRadius: 4,
      borderColor: colors.accent,
      borderWidth: 1,
      alignSelf: 'center',
    },
    toggleButtonText: {
      color: colors.accent,
      fontSize: 12,
      textAlign: 'center',
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: 12,
    },
  });
};

export default createCommonStyles;
