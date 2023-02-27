import React, {FunctionComponent as FC, useContext, useState} from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import Button from '../ui/Button/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../providers/AuthProvider'
import Field from '../ui/Field/filed'

const AuthScreen:FC = () => {
	const {Auth, setAuth} = useContext(AuthContext)
	const {navigate} = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
	<>
		<SafeAreaView>
			<View className='mx-5 justify-center items-center h-full'>
				<View className='w-9/12'>
					<Text className='text-center text-black text-3xl font-bold mb-2'>Вход</Text>
					<Field placeholder='Введите email' onChange={value => setEmail(value)} value={email}/>
					<Field placeholder='Введите пароль' onChange={value => setPassword(value)} value={password} isSecure={true}/>
					<Button title='Продолжить' onClick={() => setAuth(true)}></Button>
				</View>
			</View>
		</SafeAreaView>
	</>
	)
}

export default AuthScreen