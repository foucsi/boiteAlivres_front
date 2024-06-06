import {ScrollView, StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import MapView, {Marker} from "react-native-maps";
import {useGetLocationUser} from "@/hooks/useGetLocationUser";
import MarkerUser from "@/components/MarkerUser";
import {useAddMarkerInDb} from "@/hooks/useAddMarkerInDb";
import MarkerBookPlaces from "@/components/MarkerBookPlaces";
import {useGetAllBookPlaces} from "@/hooks/useGetAllBookPlaces";
import ModalAddMarker from "@/components/ModalAddMarker";
import ModalBookPlaces from "@/components/ModalBookPlaces";

// @ts-ignore
export default function MapViewComponent({setModalVisible, modalVisible}) {
    const {location} = useGetLocationUser();
    const {addMarker, modalIsVisible, setModalIsVisible} = useAddMarkerInDb();
    const {bookSpaces} = useGetAllBookPlaces();

    const [selectedMarker, setSelectedMarker] =
        useState({lat: null,long:null,description:null, date:null, username:null, photo:null, uniqueId:null});


    const allBooksSpaces = bookSpaces.map((bookSpace: any) => {
        return (
            <MarkerBookPlaces key={bookSpace._id}
                              lat={bookSpace.latitude}
                              long={bookSpace.longitude}
                              description={bookSpace.description}
                              img={bookSpace.icon}
                              photo={bookSpace.photo}
                              photoUser={bookSpace.addedBy.photo}
                              date={bookSpace.date_added}
                              username={bookSpace.addedBy.username}
                              setModalVisible={setModalVisible}
                              uniqueId={bookSpace.addedBy.uniqueId}
                              setSelectedMarker={setSelectedMarker}
                              />
        )
    })
    return (
            <MapView onLongPress={addMarker} style={styles.map}>
                {location && (
                    // @ts-ignore
                    <MarkerUser lat={location.coords.latitude} long={location.coords.longitude}/>
                )}
                {allBooksSpaces}
                <View>
                    {modalIsVisible && <ModalAddMarker modalVisible={modalIsVisible} setModalVisible={setModalIsVisible}/>}
                </View>

                <View>
                    <ModalBookPlaces modalVisible={modalVisible} setModalVisible={setModalVisible} selectedMarker={selectedMarker}/>
                </View>
            </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height: '100%',
        width: '100%',
    },
    imgMarkerUser:{
        height:60,
        width:60,
        borderRadius: 40,
    },
})
