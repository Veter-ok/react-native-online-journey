import React, {FunctionComponent as FC} from 'react'
import { StatusBar } from 'expo-status-bar'
import {Text, SafeAreaView } from 'react-native'
import ProfileBar from '../components/ui/ProfileBar/profileBar'

const HomeScreen:FC = () => {
  return (
	<SafeAreaView>
		<ProfileBar/>
	</SafeAreaView>
  )
}

export default HomeScreen