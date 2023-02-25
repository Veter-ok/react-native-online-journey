import React, {FunctionComponent as FC} from 'react'
import {Text, TouchableHighlight } from 'react-native'

interface IPropsButton {
	title: string
}

const Button:FC<IPropsButton> = ({title}) => {
  return (
	<TouchableHighlight 
		underlayColor={"#FBBF24"}
		onPress={() => {console.log(title)}} 
		className='w-40 bg-violet-500 block p-2 mx-auto my-2 rounded-lg'
	>
		<Text className='text-center text-lg font-bold p-1'>{title}</Text>
	</TouchableHighlight>
  )
}

export default Button