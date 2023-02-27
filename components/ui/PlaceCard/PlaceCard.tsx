import React, {FunctionComponent as FC} from 'react'
import {View, Text, TouchableHighlight } from 'react-native'

interface IPropsPlaceCard {
	title: string
}

const PlaceCard:FC<IPropsPlaceCard> = ({title}) => {
  return (
	<View className='w-40 h-44 bg-gray-300 rounded-md mr-3'>
		<Text className='m-3'>{title}</Text>
	</View>
  )
}

export default PlaceCard