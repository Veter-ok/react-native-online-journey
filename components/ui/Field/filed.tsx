import React, {FunctionComponent as FC} from 'react'
import {TextInput} from 'react-native'

interface IPropsField {
	placeholder: string
	onChange: (value: string) => void,
	value: string
	isSecure?: boolean
}

const Field:FC<IPropsField> = ({placeholder, onChange, value, isSecure}) => {
  return (
	<TextInput
		showSoftInputOnFocus={false}
		placeholder={placeholder}
		onChangeText={onChange}
		value={value}
		secureTextEntry={isSecure}
		autoCapitalize='none'
		className='rounded-xl bg-gray-200 mt-3 p-3 w-full'
	/>
  )
}

export default Field