import React, {FunctionComponent as FC} from 'react'
import {Text, View} from 'react-native'
import {UserIcon} from 'react-native-heroicons/outline'
import Button from '../Button/Button'
import { useNavigation } from '@react-navigation/native'

const ProfileBar:FC = () => {
	const {navigate} = useNavigation()

	return (
		<View className="bg-white w-full p-3">
			<View className='w-full space-x-5 flex-row mt-12 mb-2'>
				<Text className="text-2xl">Лавров Родион</Text>
				<View className='justify-self-end'><UserIcon size={32}/></View>
			</View>
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
			<Button title='Карта' onClick={() => navigate("Map")}/>
		</View>
  )
}

export default ProfileBar