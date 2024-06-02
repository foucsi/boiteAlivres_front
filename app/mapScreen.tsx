import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

export default function MapScreen() {
    return (
        // @ts-ignore
        <View provider={PROVIDER_GOOGLE} style={styles.container}>
            <MapView style={styles.map}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    map: {
        width: '100%',
        height: '100%',
    },
})
