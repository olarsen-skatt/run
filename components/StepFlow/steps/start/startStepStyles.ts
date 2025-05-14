// File: components/StepFlow/steps/startStepStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  heading: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 48,
  },
  button: {
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
