import React, {FunctionComponent as FC, useContext} from 'react'
import {Text, View, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../providers/AuthProvider'
import MapView, { Marker } from 'react-native-maps';
import YaMap from 'react-native-yamap'
import Button from '../ui/Button/Button';

const MapScreen:FC = () => {
	const {navigate} = useNavigation()

	return (
		<View className='w-full h-full'>
			<MapView className='w-full h-3/5'
    		initialRegion={{
				latitude: 55.78,
				longitude: 37.56,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
   			 }}
			 onPress={() => console.log("click")}
 			 >	
				<Marker coordinate={{ latitude: 55.78,longitude: 37.56}} title='Marker'/>
			 </MapView>
			 <View className='w-full h-1/5'>
				<Text className='font-bold ml-3 mt-5 text-2xl'>Красная площадь</Text>
				<Image 
					source={{uri: "https://ic.pics.livejournal.com/prewe_90/48908109/587527/587527_original.jpg"}} 
					className='m-2 h-full rounded-xl' 
				/>
				<Button title="Домой" onClick={() => navigate("Home")}/>
			 </View>
		</View>
	)
}

export default MapScreen