import React from 'react'
import {Marker} from "react-native-maps";

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description}) {
    return (
        <Marker description={description} coordinate={{latitude:lat, longitude:long}}/>
    )
}

