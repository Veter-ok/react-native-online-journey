import React, {FunctionComponent as FC} from 'react'
import {Button, Text, View} from 'react-native'
import {UserIcon} from 'react-native-heroicons/outline'

const ProfileBar:FC = () => {
  return (
	<View className="bg-white">
		<View>
			<Text className="">Lavrov Rodion</Text>
			<Text className="">Вход</Text>
		</View>
		<UserIcon size={32}/>
	</View>
  )
}

export default ProfileBar