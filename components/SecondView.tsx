import {View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

// @ts-ignore
export default function SecondView({selectedMarker, momentDate}) {
    return (
        <View style={styles.secondView}>
            <View>
                <Text>Posté le {momentDate} </Text>
            </View>
            <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <Image source={{uri: selectedMarker.photoUser}} style={{width: 30, height: 30, borderRadius: 50}}/>
                <Text>{selectedMarker.username}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    secondView:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        height: '5%',
        backgroundColor: "#F7F9F9",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#294C60',
        opacity: 0.9,
    },
})
