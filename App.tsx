import React from 'react';
import Navigation from './Navigation/Navigation';
import AuthProvider from './providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
  );
}
