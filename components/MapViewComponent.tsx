import {ScrollView, StyleSheet, View} from 'react-native'
import React, {useEffect, useMemo, useState} from 'react'
import MapView, {Marker} from "react-native-maps";
import {useGetLocationUser} from "@/helpers/hooks/useGetLocationUser";
import MarkerUser from "@/components/MarkerUser";
import {useAddMarkerInDb} from "@/helpers/hooks/useAddMarkerInDb";
import MarkerBookPlaces from "@/components/MarkerBookPlaces";
import {useGetAllBookPlaces} from "@/helpers/hooks/useGetAllBookPlaces";
import ModalAddMarker from "@/components/ModalAddMarker";
import ModalBookPlaces from "@/components/ModalBookPlaces";
import {useSelector} from "react-redux";
import ModalPremium from "@/components/ModalPremium";
import {getFirstConnection} from "@/helpers/hooks/getFisrtConnection";
import ModalFirstConnection from "@/components/ModalFirstConnection";

// @ts-ignore
export default function MapViewComponent({setModalVisible, modalVisible}) {
    const {location} = useGetLocationUser();
    const {addMarker, modalIsVisible, setModalIsVisible,modalPremiumIsVisible, setModalPremiumIsVisible} = useAddMarkerInDb();
    const {bookSpaces} = useGetAllBookPlaces();
    const [selectedMarker, setSelectedMarker] =
        useState({lat: null,long:null,description:null, date:null, username:null, photo:null, uniqueId:null, id:null});

    const {firstLogin, setFirstLogin} = getFirstConnection()

    const user = useSelector((state: any) => state.user.value);
    let premium = user.premium

    // useEffect(() => {
    //     console.log('firstConnection', firstLogin)
    // }, []);


    const allBookSpaces = useMemo(() => bookSpaces.map((bookSpace: any) => (
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
                          id={bookSpace._id}
                          setSelectedMarker={setSelectedMarker}
        />
    )), [bookSpaces, setModalVisible, setSelectedMarker]);


    return (
            <MapView onLongPress={addMarker} style={styles.map}>
                {location &&(
                    // @ts-ignore
                    <MarkerUser lat={location.coords.latitude} long={location.coords.longitude}/>
                )}
                {allBookSpaces}
                <View>
                    {modalIsVisible && <ModalAddMarker modalVisible={modalIsVisible} setModalVisible={setModalIsVisible}/>}
                </View>
                <View>
                    {modalPremiumIsVisible && <ModalPremium setModalPremiumIsVisible={setModalPremiumIsVisible}/>}
                </View>
                <View>
                    {/*@ts-ignore*/}
                    <ModalBookPlaces modalVisible={modalVisible} setModalVisible={setModalVisible} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>
                </View>
                <View>
                    {/*@ts-ignore*/}
                    {firstLogin && <ModalFirstConnection setFirstLogin={setFirstLogin}/>}
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
