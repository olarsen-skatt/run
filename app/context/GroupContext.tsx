// File: context/GroupContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Group, Member } from '../types/group';

type GroupContextType = {
  group: Group | null;
  createGroup: (name: string, creator: Member) => void;
  joinGroup: (groupCode: string, user: Member) => void;
  leaveGroup: () => void;
};

const GroupContext = createContext<GroupContextType | undefined>(undefined);

export const GroupProvider = ({ children }: { children: React.ReactNode }) => {
  const [group, setGroup] = useState<Group | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('user-group').then((stored) => {
      if (stored) setGroup(JSON.parse(stored));
    });
  }, []);

  const save = (g: Group | null) => {
    setGroup(g);
    if (g) {
      AsyncStorage.setItem('user-group', JSON.stringify(g));
    } else {
      AsyncStorage.removeItem('user-group');
    }
  };

  const createGroup = (name: string, creator: Member) => {
    const newGroup: Group = {
      id: Math.random().toString(36).slice(2, 8).toUpperCase(), // e.g. ABC123
      name,
      ownerId: creator.id,
      members: [creator],
    };
    save(newGroup);
  };

  const joinGroup = (groupCode: string, user: Member) => {
    // For now, mock it — pretend we fetch a group and add the user
    const fakeGroup: Group = {
      id: groupCode,
      name: 'Joined Group',
      ownerId: user.id, // simulate ownership
      members: [user],
    };
    save(fakeGroup);
  };

  const leaveGroup = () => {
    save(null);
  };

  return (
    <GroupContext.Provider value={{ group, createGroup, joinGroup, leaveGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => {
  const context = useContext(GroupContext);
  if (!context) throw new Error('useGroup must be used inside a GroupProvider');
  return context;
};
