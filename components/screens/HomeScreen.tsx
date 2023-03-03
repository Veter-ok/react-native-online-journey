import React, {FunctionComponent as FC, useContext} from 'react'
import {Text, SafeAreaView, View, ScrollView} from 'react-native'
import ProfileBar from '../ui/ProfileBar/profileBar'
import Button from '../ui/Button/Button'
import { useNavigation } from '@react-navigation/native'
import PlaceCard from '../ui/PlaceCard/PlaceCard'

const HomeScreen:FC = () => {
	const {navigate} = useNavigation()

	return (
	<>
		<ProfileBar/>
		<SafeAreaView className='m-4 h-full' >
				<ScrollView>
					<View className='mt-4'>
						<Text className='text-xl mb-4'>Последние места</Text>
						<ScrollView className='flex-row' horizontal>
							<PlaceCard title="Красная площадь"/>
							<PlaceCard title="Красная площадь"/>
							<PlaceCard title="Красная площадь"/>
						</ScrollView>
					</View>
					<View className='mt-4'>
						<Text className='text-xl mb-4'>Избранные места</Text>
						<ScrollView className='flex-row' horizontal>
							<PlaceCard title="Красная площадь"/>
							<PlaceCard title="Красная площадь"/>
							<PlaceCard title="Красная площадь"/>
						</ScrollView>
					</View>
				</ScrollView>
			</SafeAreaView>
	</>
	)
}

export default HomeScreen