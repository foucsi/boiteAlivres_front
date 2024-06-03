import { Text} from 'react-native'
import React from 'react'
import {Marker} from "react-native-maps";

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description}) {
    return (
        // coordinate provisoire a modifier
        <Marker description={description} coordinate={{latitude:lat, longitude:long}}>
            <Text>MarkerBookPlaces</Text>
        </Marker>
    )
}
