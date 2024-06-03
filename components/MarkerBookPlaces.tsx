import { StyleSheet, Text} from 'react-native'
import React from 'react'
import {Marker} from "react-native-maps";

// @ts-ignore
export default function MarkerBookPlaces({lat,long, description}) {
    return (
        <Marker description={description} coordinate={{latitude:lat, longitude:long}}/>
    )
}

const styles = StyleSheet.create({
    imgMarkerUser:{
        height:60,
        width:60,
        borderRadius: 40,
    }
})
