import { StyleSheet} from 'react-native'
import React from 'react'
import MapView from "react-native-maps";
import {useGetLocationUser} from "@/hooks/useGetLocationUser";
import MarkerUser from "@/components/MarkerUser";
import {useAddMarkerInDb} from "@/hooks/useAddMarkerInDb";
import MarkerBookPlaces from "@/components/MarkerBookPlaces";

export default function MapViewComponent() {
    const {location} = useGetLocationUser();
    const {addMarker} = useAddMarkerInDb();


    return (
        <MapView onLongPress={addMarker} style={styles.map}>
            {location && (
                // @ts-ignore
                <MarkerUser lat={location.coords.latitude} long={location.coords.longitude}/>
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
