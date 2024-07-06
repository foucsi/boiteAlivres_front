import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import Touchable from "@/components/touchableOpacity/Touchable";
import {useSelector} from "react-redux";

// @ts-ignore
export default function FirstView({selectedMarker, handleCloseModal, addFavorite, isFavorite, handleUploadPhoto, handleModalDeleteBookPlace}) {

    //Redux
    const user = useSelector((state: any) => state.user.value)
    return (
        <View style={styles.firstView}>
            <Image source={{uri: selectedMarker.photo}} style={styles.photo}/>
            <View style={styles.containerClosed}>
                <Touchable onPress={handleCloseModal} nameIcon="closecircle" size={28} color="#F7F9F9"/>
            </View>
            <View style={styles.containerFavoris}>
                <Touchable onPress={addFavorite} nameIcon="heart" size={28} color={isFavorite ? "orange" : "#F7F9F9" }/>
            </View>
            {user.uniqueId === selectedMarker.uniqueId && <View style={styles.containerUpdatePhoto}>
                <Touchable onPress={handleUploadPhoto} nameIcon="camera" size={28} color="#F7F9F9"/>
            </View>}
            {user.uniqueId === selectedMarker.uniqueId && <View style={styles.containerDeleteBookPlace}>
                <TouchableOpacity onPress={handleModalDeleteBookPlace}>
                    <Text style={{color:"white"}}>Supprimer</Text>
                </TouchableOpacity>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    firstView: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
        backgroundColor: 'white',
    },
    containerClosed:{
        position: 'absolute',
        top: 50,
        right: 0,
        width: 30,
        left:10,
    },
    containerFavoris:{
        position: 'absolute',
        top: 50,
        right: 10,
        width: 30,
    },
    containerUpdatePhoto:{
        position: 'absolute',
        bottom:10,
        right: 10,
        width: 30,
    },
    containerDeleteBookPlace:{
        position: 'absolute',
        bottom: 10,
        right: 160,
        width: 100,
        backgroundColor:"#BA274A",
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo:{
        width: "100%",
        height: "100%",
    },
})
