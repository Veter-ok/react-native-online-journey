import React, {FunctionComponent as FC, useContext, useState} from 'react'
import {Text, View, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import Button from '../ui/Button/Button';

const MapScreen:FC = () => {
	const {navigate} = useNavigation()
	const [windowOpen, setWindowOpen] = useState(false)
	const [currentlyPlace, setCurrentlyPlace] = useState(null)
	const [image, setImage] = useState('')

	const openWindow = async (placeId, place) => {
		// setWindowOpen(true)
		// setCurrentlyPlace(place)
		// const imageData = await search()
		// console.log(imageData)
		// setImage('')
	}

	const search = async (placeId, place:string) => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'a011aa4a34msh0601bbc6c6ff814p1989d0jsnba609c677f28',
				'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
			}
		};
		place = place.replace("\n", ' ')
		await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${place}&pageNumber=1&pageSize=10&autoCorrect=true`, options)
			.then(response => response.json())
			.then(response => {
				console.log(place)
				response.value.map((el, index) => {
					console.log(el.url)
				})
				setImage(response.value[0].url)
			})
			.catch(err => console.error(err));
		setWindowOpen(true)
		setCurrentlyPlace(place)
	}

	return (
		<View className='w-full h-full'>
			<MapView className={`w-full ${windowOpen ? 'h-3/5' : 'h-full'}`}
				initialRegion={{
					latitude: 55.78,
					longitude: 37.56,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				onPress={() => setWindowOpen(true)}
				onPoiClick={(event) => search(event.nativeEvent.placeId, event.nativeEvent.name)}
				provider='google'
 			 >
				<Marker coordinate={{ latitude: 55.78,longitude: 37.56}} title='Marker'/>
				<Button title="Домой" onClick={() => navigate("Home")}/>
			 </MapView>
			<ScrollView className='w-full h-full'>
				<Button title="Закрыть" onClick={() => setWindowOpen(false)}/>
				<Text className='font-bold ml-3 mt-5 text-2xl'>{currentlyPlace}</Text>
				<Image 
					source={{uri: image}} 
					className='m-2 h-full rounded-xl' 
				/>
			</ScrollView>
		</View>
	)
}

// https://ic.pics.livejournal.com/prewe_90/48908109/587527/587527_original.jpg
export default MapScreen