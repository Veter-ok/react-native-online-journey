import React, {FunctionComponent as FC, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/screens/HomeScreen';
import { AuthContext } from '../providers/AuthProvider';
import AuthScreen from '../components/screens/AuthScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import MapScreen from '../components/screens/MapScreen';

const Stack = createNativeStackNavigator();

const Navigation:FC = () => {
	const {Auth} = useContext(AuthContext)

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				{Auth ?
					<>
						<Stack.Screen name="Home" component={HomeScreen}/>
						<Stack.Screen name="Profile" component={ProfileScreen}/>
						<Stack.Screen name="Map" component={MapScreen}/>
					</>
				:
					<Stack.Screen name="Auth" component={AuthScreen}/>
				}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation

