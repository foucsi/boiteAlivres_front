import React from 'react'
import {Marker} from "react-native-maps";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description,img, setModalVisible, setSelectedMarker, photo, date, username, ...props}) {
    return (
        <Marker description={description} coordinate={{latitude:lat, longitude:long}} >
            <FontAwesome name={img} size={24} color="black" onPress={()=>{
                setModalVisible(true)
                setSelectedMarker({lat:lat, long:long, photo:photo, description:description , date:date, username:username})
            }}/>
        </Marker>
    )
}

