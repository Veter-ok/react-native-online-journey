import React, {FunctionComponent as FC, useContext} from 'react'
import {Text, SafeAreaView} from 'react-native'
import ProfileBar from '../components/ui/ProfileBar/profileBar'
import Button from '../components/ui/Button/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../providers/AuthProvider'

const HomeScreen:FC = () => {
	const {Auth, setAuth} = useContext(AuthContext)
	const {navigate} = useNavigation()

	return (
	<>
		<SafeAreaView>
			<ProfileBar/>
			<Button title='Главная' onClick={() => console.log("123")}/>
			<Button title='Профиль' onClick={() => navigate("Profile")}/>
			<Button title='Карта' onClick={() => console.log("123")}/>
			<Button title='Выход' onClick={() => setAuth(false)}/>
		</SafeAreaView>
	</>
	)
}

export default HomeScreen