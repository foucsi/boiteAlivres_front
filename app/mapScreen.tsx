import {View, Text, StyleSheet,Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import * as Location from "expo-location"
import {useSelector} from "react-redux";
import {useGetLocationUser} from "@/hooks/useGetLocationUser";

export default function MapScreen() {
    const {location} = useGetLocationUser();
    // @ts-ignore
    const user = useSelector((state) => state.user.value);




    return (
        // @ts-ignore
        <View provider={PROVIDER_GOOGLE} style={styles.container}>
            <MapView style={styles.map}>
                {location && (
                    <Marker
                        coordinate={{
                            // @ts-ignore
                            latitude: location.coords.latitude,
                            // @ts-ignore
                            longitude: location.coords.longitude,
                        }}
                        description={`👋 Hi ${user.username} ! `}
                    >
                        <Image source={{uri : user.photo}} style={styles.imgMarkerUser}/>
                    </Marker>
                )}
            </MapView>
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
    imgMarkerUser:{
        height:60,
        width:60,
        borderRadius: 40,
    }
})
