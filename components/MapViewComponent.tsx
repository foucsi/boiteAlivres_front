import { StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import MapView, {Marker} from "react-native-maps";
import {useGetLocationUser} from "@/hooks/useGetLocationUser";
import MarkerUser from "@/components/MarkerUser";
import {useAddMarkerInDb} from "@/hooks/useAddMarkerInDb";
import MarkerBookPlaces from "@/components/MarkerBookPlaces";
import {useGetAllBookPlaces} from "@/hooks/useGetAllBookPlaces";

export default function MapViewComponent() {
    const {location} = useGetLocationUser();
    const {addMarker} = useAddMarkerInDb();
    const {bookSpaces} = useGetAllBookPlaces();

    const allBooksSpaces = bookSpaces.map((bookSpace: any) => {
        return (
            <MarkerBookPlaces key={bookSpace._id} lat={bookSpace.latitude} long={bookSpace.longitude} description={bookSpace.description}/>
        )
    })

    return (
        <MapView onLongPress={addMarker} style={styles.map}>
            {location && (
                <MarkerUser lat={location.coords.latitude} long={location.coords.longitude}/>
            )}
            {allBooksSpaces}
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
