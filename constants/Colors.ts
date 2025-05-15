// File: constants/Colors.ts
export const getColors = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    return {
      background: '#111',
      text: '#fff',
      subtleText: '#888',
      accent: '#00ff88',
      toggleBackground: '#222',
      toggleThumb: '#00ff88',
      toggleTrack: '#333',
      toggleIcon: '#000',
      buttonText: '#000',
    };
  } else {
    return {
      background: '#fff',
      text: '#000',
      subtleText: '#666',
      accent: '#007aff',
      toggleBackground: '#eee',
      toggleThumb: '#00ff88',
      toggleTrack: '#ccc',
      toggleIcon: '#fff',
      buttonText: '#fff',
    };
  }
};
