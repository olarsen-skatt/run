import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from '@/components/useColorScheme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={22} style={{ marginBottom: -2 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = (colorScheme ?? 'light') === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? '#111' : '#fff',
          borderTopWidth: 0,
          paddingTop: 4,
          height: 60,
        },
        tabBarActiveTintColor: '#00ff88',
        tabBarInactiveTintColor: isDark ? '#555' : '#999',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          title: 'Main',
          tabBarIcon: ({ color }) => <TabBarIcon name="bolt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Other',
          tabBarIcon: ({ color }) => <TabBarIcon name="circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
