import React from 'react';
import Navigation from './Navigation/Navigation';
import AuthProvider from './providers/AuthProvider';
import YaMap from 'react-native-yamap'

YaMap.init('');

export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}
