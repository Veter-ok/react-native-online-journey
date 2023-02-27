import React, {FunctionComponent as FC} from 'react'
import {Button, Text, View} from 'react-native'
import {UserIcon} from 'react-native-heroicons/outline'

const ProfileBar:FC = () => {
  return (
	<View className="bg-white h-36 w-full">
		<View className='w-full space-x-5 flex-row mt-14 ml-3'>
			<Text className="text-2xl">Lavrov Rodion</Text>
			<View className='justify-self-end'><UserIcon size={32}/></View>
		</View>
	</View>
  )
}

export default ProfileBar