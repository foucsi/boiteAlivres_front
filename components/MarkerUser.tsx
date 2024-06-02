import {Image, StyleSheet} from 'react-native'
import React from 'react'
import {Marker} from "react-native-maps";
import {useSelector} from "react-redux";

interface MarkerUserProps {
    lat: number,
    long: number
}

interface RootState {
    user: {
        value: {
            username: string,
            photo: string
        }
    }
}

export default function MarkerUser({lat, long}: MarkerUserProps) {
    const user = useSelector((state:RootState) => state.user.value);
    return (
        <Marker description={`👋 Bonjour ${user.username} ! `} coordinate={{latitude: lat, longitude:long}}>
            <Image source={{uri : user.photo}} style={styles.imgMarkerUser}/>
        </Marker>
    )
}

const styles = StyleSheet.create({
    imgMarkerUser:{
        height:60,
        width:60,
        borderRadius: 40,
    }
})

