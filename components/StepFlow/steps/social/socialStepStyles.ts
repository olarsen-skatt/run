// File: components/StepFlow/steps/socialStepStyles.ts
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
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 32,
  },
  options: {
    width: '100%',
    marginBottom: 24,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginBottom: 12,
  },
  optionPressed: {
    backgroundColor: '#333',
  },
  optionSelected: {
    borderColor: '#00ff88',
    backgroundColor: '#1c1c1c',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    color: '#fff',
    fontSize: 16,
    marginBottom: 24,
    paddingVertical: 8,
  },
  navButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#00ff88',
    borderRadius: 6,
  },
  navPressed: {
    opacity: 0.8,
  },
  navText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
