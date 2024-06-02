import { Text} from 'react-native'
import React from 'react'
import {Marker} from "react-native-maps";

export default function MarkerBookPlaces() {
    return (
        // coordinate provisoire a modifier
        <Marker coordinate={{latitude:1, longitude:1}}>
            <Text>MarkerBookPlaces</Text>
        </Marker>
    )
}
