// File: app/(tabs)/tabOneStyles.ts
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
    marginBottom: 8,
  },
  subline: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 64,
  },
  testButton: {
    position: 'absolute',
    bottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#333',
    borderRadius: 4,
    opacity: 0.7,
  },
  testButtonPressed: {
    opacity: 0.5,
  },
  testButtonText: {
    color: '#ccc',
    fontSize: 12,
  },
});
