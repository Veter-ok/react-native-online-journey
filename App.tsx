import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <Navigation/>
      //  <SafeAreaView>
      //   <Text className='text-red-500'>fsdfdf</Text>
      // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
