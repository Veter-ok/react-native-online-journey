import React, {FunctionComponent as FC, useContext} from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../providers/AuthProvider'

const ProfileScreen:FC = () => {
	const {Auth, setAuth} = useContext(AuthContext)
	const {navigate} = useNavigation()

	return (
	<>
		<SafeAreaView>
			<View>
				<Text className='text-centre text-black text-3xl font-bold mb-2'>Lavrov Rodion</Text>
			</View>
		</SafeAreaView>
	</>
	)
}

export default ProfileScreen