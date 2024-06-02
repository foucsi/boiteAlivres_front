import {Image, StyleSheet} from 'react-native'
import React from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {useSelector} from "react-redux";
import {useGetLocationUser} from "@/hooks/useGetLocationUser";

export default function MapViewComponent() {
    const {location} = useGetLocationUser();
    // @ts-ignore
    const user = useSelector((state) => state.user.value);
    return (
        // @ts-ignore
        <MapView style={styles.map}>
            {location && (
                <Marker
                    coordinate={{
                        // @ts-ignore
                        latitude: location.coords.latitude,
                        // @ts-ignore
                        longitude: location.coords.longitude,
                    }}
                    description={`👋 Bonjour ${user.username} ! `}
                >
                    <Image source={{uri : user.photo}} style={styles.imgMarkerUser}/>
                </Marker>
            )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        width: '100%',
        height: '100%',
    },
    imgMarkerUser:{
        height:60,
        width:60,
        borderRadius: 40,
    }
})
