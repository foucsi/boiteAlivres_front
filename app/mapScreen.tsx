import {View, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import MapViewComponent from "@/components/MapViewComponent";
import MapView from "react-native-maps";

export default function MapScreen() {
    return (
        // @ts-ignore
        <View style={styles.container}>
            <MapViewComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})
