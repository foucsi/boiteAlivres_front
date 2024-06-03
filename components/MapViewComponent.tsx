import { StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import MapView, {Marker} from "react-native-maps";
import {useGetLocationUser} from "@/hooks/useGetLocationUser";
import MarkerUser from "@/components/MarkerUser";
import {useAddMarkerInDb} from "@/hooks/useAddMarkerInDb";
import MarkerBookPlaces from "@/components/MarkerBookPlaces";
import {useGetAllBookPlaces} from "@/hooks/useGetAllBookPlaces";
import ModalAddMarker from "@/components/ModalAddMarker";

export default function MapViewComponent() {
    const {location} = useGetLocationUser();
    const {addMarker} = useAddMarkerInDb();
    const {bookSpaces} = useGetAllBookPlaces();

    const [modalIsVisible, setModalIsVisible] = useState(true)

    const allBooksSpaces = bookSpaces.map((bookSpace: any) => {
        return (
            <MarkerBookPlaces key={bookSpace._id} lat={bookSpace.latitude} long={bookSpace.longitude} description={bookSpace.description} img={bookSpace.icon}/>
        )
    })
    return (
        <MapView onLongPress={addMarker} style={styles.map}>
            {location && (
                // @ts-ignore
                <MarkerUser lat={location.coords.latitude} long={location.coords.longitude}/>
            )}
            {allBooksSpaces}
            {modalIsVisible && <ModalAddMarker modalVisible={modalIsVisible} setModalVisible={setModalIsVisible}/>}
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
