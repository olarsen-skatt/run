// File: context/ReminderContext.tsx
import React, { createContext, useContext, useState } from 'react';

type ReminderContextType = {
  time: string;
  setTime: (value: string) => void;
};

const ReminderContext = createContext<ReminderContextType | undefined>(undefined);

export function ReminderProvider({ children }: { children: React.ReactNode }) {
  const [time, setTime] = useState('18:30'); // default fallback

  return (
    <ReminderContext.Provider value={{ time, setTime }}>
      {children}
    </ReminderContext.Provider>
  );
}

export function useReminder() {
  const ctx = useContext(ReminderContext);
  if (!ctx) throw new Error('useReminder must be used inside ReminderProvider');
  return ctx;
}

export default ReminderContext;