import React from 'react'
import {Marker} from "react-native-maps";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description,img}) {
    return (
        <Marker description={description} coordinate={{latitude:lat, longitude:long}}>
            <FontAwesome name={img} size={24} color="black" />
        </Marker>
    )
}

