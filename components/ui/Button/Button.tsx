import React, {FunctionComponent as FC} from 'react'
import {Text, TouchableHighlight } from 'react-native'

interface IPropsButton {
	onClick: () => void,
	title: string
}

const Button:FC<IPropsButton> = ({onClick, title}) => {
  return (
	<TouchableHighlight 
		underlayColor="#FBBF24"
		onPress={onClick} 
		className='w-full bg-violet-500 block p-3 mx-auto mt-4 rounded-lg'
	>
		<Text className='text-center text-lg font-bold'>{title}</Text>
	</TouchableHighlight>
  )
}

export default Button