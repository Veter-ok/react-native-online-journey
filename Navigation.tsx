import React, {FunctionComponent as FC} from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation:FC = () => {
  return (
	<NavigationContainer>
		<Stack.Navigator screenOptions={{headerShown: false}}>
        	<Stack.Screen name="Home" component={HomeScreen} />
      	</Stack.Navigator>
	</NavigationContainer>
  )
}

export default Navigation
