// File: components/StepFlow/steps/whenStepStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  wheelWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  colon: {
    fontSize: 32,
    color: '#fff',
    paddingHorizontal: 8,
  },
  selectedTime: {
    marginTop: 12,
    color: '#00d4ff',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#00ff88',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 6,
    shadowColor: '#00ff88',
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
    color: '#000',
  },
});
