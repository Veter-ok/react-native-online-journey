import React, {FunctionComponent as FC, useContext} from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../providers/AuthProvider'
import Button from '../ui/Button/Button'

const ProfileScreen:FC = () => {
	const {Auth, setAuth} = useContext(AuthContext)
	const {navigate} = useNavigation()

	return (
	<>
		<SafeAreaView>
			<View>
				<Text className='text-centre text-black text-3xl font-bold mb-2'>Lavrov Rodion</Text>
				<View className='flex-row w-full my-2'>
					<View className='h-20 bg-gray-300 mx-4 w-1/4 rounded-lg'>
						<Text className='mt-4 text-center font-bold text-lg'>29</Text>
						<Text className='text-center'>Друзей</Text>
					</View>
					<View className='h-20 bg-gray-300 mx-4 w-1/4 rounded-lg'>
						<Text className='mt-4 text-center font-bold text-lg'>19</Text>
						<Text className='mx-1 text-center'>места</Text>
					</View>
					<View className='h-20 bg-gray-300 mx-4 w-1/4 rounded-lg'>
						<Text className='mt-4 text-center font-bold text-lg'>25%</Text>
						<Text className='mx-1 text-center'>покрытие</Text>
					</View>
				</View>
				<Button title="Настройки" onClick={() => navigate("Home")}/>
				<Button title='Выход' onClick={() => setAuth(false)}/>
				<Button title="Домой" onClick={() => navigate("Home")}/>
			</View>
		</SafeAreaView>
	</>
	)
}

export default ProfileScreen