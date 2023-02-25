import React, {FunctionComponent as FC} from 'react'
import { StatusBar } from 'expo-status-bar'
import {Text, SafeAreaView, TouchableHighlight } from 'react-native'
import ProfileBar from '../components/ui/ProfileBar/profileBar'
import Button from '../components/ui/Button/Button'

const HomeScreen:FC = () => {
  return (
	<>
		{/* <ProfileBar/> */}
		<SafeAreaView>
			<ProfileBar/>
			<Button title='Главная'/>
			<Button title='Профиль'/>
			<Button title='Карта'/>
		</SafeAreaView>
	</>
  )
}

export default HomeScreen