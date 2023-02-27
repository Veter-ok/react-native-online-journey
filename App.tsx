import React from 'react';
import Navigation from './Navigation/Navigation';
import AuthProvider from './providers/AuthProvider';
import YaMap from 'react-native-yamap'

// YaMap.init('d46dd253-2d53-4000-bbc2-6aa417d5fcd8');

export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}
